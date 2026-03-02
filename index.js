import * as THREE from "https://cdn.skypack.dev/three@0.148.0";
import openSimplexNoise from 'https://cdn.skypack.dev/open-simplex-noise';

//VARIABLES
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const white = 0xffffff;
const black = 0x000000;
const yellow = 0xffc800;
const red = 0xff0000;
const purple = 0xa200ff;
const green = 0x03fc2c;
const blue = 0x031cfc;
const cyan = 0x03d3fc;
const pink = 0xff7dcd;
const lightYellow = 0xffe97d;

//SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color(black);
scene.fog = new THREE.Fog(black, 4, 6);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper)

//LIGHT SCENE1
let lightTopColor = new THREE.Color(yellow);
let lightBackColor = new THREE.Color(red);
let rectLightColor = new THREE.Color(purple);

const lightTop = new THREE.PointLight(lightTopColor, 10);
lightTop.position.set(5, 5, 2);
lightTop.castShadow = true;
lightTop.shadow.mapSize.width = lightTop.shadow.mapSize.height = 10000;
lightTop.penumbra = 0.5;

const lightBack = new THREE.SpotLight(lightBackColor, 2);
lightBack.position.set(0, -3, -1);

const rectLight = new THREE.RectAreaLight(rectLightColor, 20, 2, 2);
rectLight.position.set(1, 1, 1);
rectLight.lookAt(0, 0, 0);

scene.add(lightTop, lightBack, rectLight);

//LIGHT SCENE2
const targetScene2 = new THREE.Object3D();
targetScene2.position.set(0, -10, 0);
scene.add(targetScene2);

const lightRight = new THREE.SpotLight(pink, 1);
lightRight.position.set(8, 0, 0);
lightRight.target = targetScene2;

const lightLeft = new THREE.SpotLight(pink, 1);
lightLeft.position.set(-8, 0, 0);
lightLeft.target = targetScene2;

const lightMidSpot = new THREE.SpotLight(lightYellow, 2);
lightMidSpot.position.set(0, -5, 20);
lightMidSpot.target = targetScene2;

const lightMidPoint = new THREE.PointLight(lightYellow, 0.05);
lightMidPoint.position.set(0, 0, -23);

scene.add(lightRight,lightLeft, lightMidSpot, lightMidPoint);


//CAMERA  scene1(-0.3, 0, 5)   scene2(0, -4.5, 10)
let updateCamPos = new THREE.Vector3(-0.3, 0, 5);
const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 1, 500);
camera.position.set(-0.3, 0, 5);
scene.add(camera);

//RENDERER
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearAlpha(0);
renderer.shadowMap.enabled = false;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.needsUpdate = true;

//SCENE1 OBJECTS
//Space size
function spaceRandom(num = 1) {
  var setNumber = -Math.random() * num + Math.random() * num;
  return setNumber;
}

//Cubes
const cubesGroup = new THREE.Object3D();
scene.add(cubesGroup);
function generateCube() {
  //Init object
  const geometry = new THREE.IcosahedronGeometry(1);
  const material = new THREE.MeshStandardMaterial({
    color: 0x111111,
    roughness: 0.4,
    metalness: 0.5,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.speedRotation = Math.random() * 0.1;
  cube.positionX = spaceRandom();
  cube.positionY = spaceRandom();
  cube.positionZ = spaceRandom();
  cube.castShadow = true;
  cube.receiveShadow = true;
  //Behavior
  const newScaleValue = spaceRandom(0.3);
  cube.scale.set(newScaleValue, newScaleValue, newScaleValue);
  cube.rotation.x = spaceRandom((180 * Math.PI) / 180);
  cube.rotation.y = spaceRandom((180 * Math.PI) / 180);
  cube.rotation.z = spaceRandom((180 * Math.PI) / 180);
  cube.position.set(cube.positionX, cube.positionY, cube.positionZ);
  cubesGroup.add(cube);
}

//Particles
const particlesGroup = new THREE.Object3D();
scene.add(particlesGroup);
function generateParticle() {
  const geometry = new THREE.CircleGeometry(0.1, 5);
  const material = new THREE.MeshPhysicalMaterial({
    color: white,
    side: THREE.DoubleSide,
  });
  const particle = new THREE.Mesh(geometry, material);
    particle.position.set(spaceRandom(2), spaceRandom(2), spaceRandom(2));
    particle.rotation.set(spaceRandom(), spaceRandom(), spaceRandom());
    const scale = 0.001 + Math.abs(spaceRandom(0.03));
    particle.scale.set(scale, scale, scale);
    particle.speedValue = spaceRandom(1);
    particlesGroup.add(particle);
}


let wave = new THREE.Vector3();
let noise = openSimplexNoise.makeNoise4D(Date.now());
let clock = new THREE.Clock();

const earthGroup = new THREE.Object3D();
earthGroup.position.set(0, 0, -10);
earthGroup.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI/2));
scene.add(earthGroup);

function generateEarth() {
  const geometry = new THREE.CylinderGeometry(4, 3, 10, 60, 30, true);
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ffb7,
    wireframe: true,
    fog: false,
  });
  geometry.positionData = [];
  for (let i = 0; i < geometry.attributes.position.count; i++){
    wave.fromBufferAttribute(geometry.attributes.position, i);
    geometry.positionData.push(wave.clone());
  }
  const earth = new THREE.Mesh(geometry, material);
  earthGroup.add(earth);
}

//Clouds
function generateCloud() {
  const material = new THREE.MeshStandardMaterial({
    color: 0xffd000,
    transparent: true,
    opacity: 0.5,
    wireframe: true,
    fog: false,
  });
  const cloudGroup = new THREE.Object3D();
  const cloudAmount = Math.floor(Math.random()*3+2);
  for (let i = 0; i < cloudAmount; i++ ) {
    const geometry = new THREE.IcosahedronGeometry(1);
    const cloud = new THREE.Mesh(geometry, material);
    const scale = 0.27/Math.floor(Math.random()*2+1);
    cloud.scale.set(scale, scale, scale);
    cloud.position.set(Math.random()+0.5, -Math.random()/2, Math.random()/3)
    cloud.rotation.set(Math.random()*Math.PI*2, Math.random()*Math.PI*2, Math.random()*Math.PI*2);
    cloudGroup.add(cloud);
  }
  cloudGroup.position.set(0, Math.random()*5+2, Math.random()+4.5);
  cloudGroup.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI*2*(Math.random()*10)));
  earthGroup.add(cloudGroup);
}

//Stars
const starGroup = new THREE.Object3D();
scene.add(starGroup);
function generateStar() {
  const ranSize = Math.random()*0.01+0.01;
  const geometry = new THREE.SphereGeometry(ranSize, 8, 8);
  const material = new THREE.MeshStandardMaterial({ color: black, fog: false });
  const star = new THREE.Mesh(geometry, material);
  star.position.set(Math.random()*18-9, Math.random()*10-9, Math.random()*20-30);
  starGroup.add(star);
}

//Airplane
let airPlaneNewPos = new THREE.Vector3(0, -5, -5);
let flagVertexCount;

const airPlaneGroup = new THREE.Object3D();
airPlaneGroup.position.set(0, -5, -5);
airPlaneGroup.scale.set(0.35, 0.35, 0.35),
scene.add(airPlaneGroup);

function generateAirPlane() {
  const matWhite = new THREE.MeshStandardMaterial({
    color: white,
    emissive: 0x5e5e5e,
    roughness: 0.5,
    metalness: 1,
    flatShading: true,
    fog: false,
  });
  const matPurple = new THREE.MeshStandardMaterial({
    color: 0x6a00ff,
    emissive: 0x1c0f45,
    roughness: 0.5,
    metalness: 1,
    flatShading: true,
    fog: false,
  });
  const matBlack = new THREE.MeshStandardMaterial({
    color: 0x111111,
    roughness: 0.5,
    metalness: 1,
    flatShading: true,
    fog: false,
  });
  const flagText = new THREE.TextureLoader().load("./images/peace-flag.webp");
  const matFlag = new THREE.MeshStandardMaterial({
    map: flagText,
    roughness: 0.5,
    metalness: 1,
    flatShading: true,
    fog: false,
  });

  const fan1Geo = new THREE.BoxGeometry(0.05, 1.2, 0.2);
  const fan1 = new THREE.Mesh(fan1Geo, matWhite);
  fan1.position.set(1.3, 0, 0);
  airPlaneGroup.add(fan1);

  const fan2Geo = new THREE.BoxGeometry(0.05, 0.2, 1.2);
  const fan2 = new THREE.Mesh(fan2Geo, matWhite);
  fan2.position.set(1.3, 0, 0);
  airPlaneGroup.add(fan2);

  const flagGeo = new THREE.PlaneGeometry(0);
  const flag = new THREE.Mesh(flagGeo, matFlag);
  flag.position.set(-1.45, 0, 0);
  airPlaneGroup.add(flag);
  flagVertexCount = flagGeo.attributes.position.count;

  const headGeo = new THREE.TorusGeometry(0.35, 0.2, 8, 20);
  const head = new THREE.Mesh(headGeo, matWhite);
  head.rotation.set(0, Math.PI/2, 0);
  head.position.set(0.95, 0, 0);
  airPlaneGroup.add(head);

  const bodyGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 20, 1, true);
  const body = new THREE.Mesh(bodyGeo, matPurple);
  body.rotation.set(0, 0, Math.PI/2);
  body.position.set(0.6, 0, 0);
  airPlaneGroup.add(body);

  const tailGeo = new THREE.CylinderGeometry(0.3, 0.5, 0.7, 20, 1, true);
  const tail = new THREE.Mesh(tailGeo, matPurple);
  tail.rotation.set(0, 0, Math.PI/2);
  tail.position.set(0, 0, 0);
  airPlaneGroup.add(tail);

  const endGeo = new THREE.ConeGeometry(0.3, 0.3, 20, 1, true);
  const end = new THREE.Mesh(endGeo, matPurple);
  end.rotation.set(0, 0, Math.PI/2);
  end.position.set(-0.5, 0, 0);
  airPlaneGroup.add(end);

  const fanCenGeo = new THREE.ConeGeometry(0.2, 0.3, 20, 1, true);
  const fanCen = new THREE.Mesh(fanCenGeo, matPurple);
  fanCen.rotation.set(0, 0, -Math.PI/2);
  fanCen.position.set(1.3, 0, 0);
  airPlaneGroup.add(fanCen);

  const wingGeo = new THREE.BoxGeometry( 0.7, 0.06, 3);
  const wing = new THREE.Mesh(wingGeo, matWhite);
  wing.position.set(0.4, 0.15, 0);
  wing.rotation.set(0, 0, Math.PI/20);
  airPlaneGroup.add(wing);

  const wheelGeo = new THREE.TorusGeometry(0.12, 0.13, 10, 10);
  const wheel1 = new THREE.Mesh(wheelGeo, matBlack);
  wheel1.position.set(0.4, -0.4, 0.6);
  airPlaneGroup.add(wheel1);
  const wheel2 = new THREE.Mesh(wheelGeo, matBlack);
  wheel2.position.set(0.4, -0.4, -0.6);
  airPlaneGroup.add(wheel2);

  const pilotGeo = new THREE.SphereGeometry(0.3, 10, 10);
  const pilot = new THREE.Mesh(pilotGeo, matWhite);
  pilot.position.set(0.23, 0.55, 0);
  airPlaneGroup.add(pilot);

  const helmet = new THREE.Mesh(wheelGeo, matBlack);
  helmet.scale.set(1, 1.5, 1);
  helmet.position.set(0.375, 0.65, 0);
  helmet.rotation.set(Math.PI/2, 0, 0);
  airPlaneGroup.add(helmet);
}

//RESIZE WINDOW
function onWindowResize() {
  //Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //Update Camera
  renderer.setSize(sizes.width, sizes.height);
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  //Refresh middle project on screen
  document.querySelectorAll(".webProject")[currentWebSlide-1].classList.remove("is-in");
  document.querySelectorAll(".dotWeb")[currentWebSlide-1].classList.remove("is-at");
  document.querySelectorAll(".gameProject")[currentGameSlide-1].classList.remove("is-in");
  document.querySelectorAll(".dotGame")[currentGameSlide-1].classList.remove("is-at");
  webSlidePos = 0;
  currentWebSlide = Math.ceil(totalWebSlide / 2);
  gameSlidePos = 0;
  currentGameSlide = Math.ceil(totalGameSlide / 2);
  //Update project size
  projectResize();
  //Refresh first image on screen
  document.querySelectorAll(".imageWrap").forEach((each) => each.style.translate = 0);
  document.querySelectorAll(".dotImg").forEach((each) => each.classList.remove("is-focus"));
  document.querySelectorAll(".dotGroup").forEach((each) => each.children[0].classList.add("is-focus"));
  document.querySelectorAll(".projectSecret").forEach((each) => each.style.width = "1px");
}
window.addEventListener("resize", onWindowResize, false);

//MOUSE EVENT
const mouse = new THREE.Vector2();
function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (event.clientY / window.innerHeight) * 2 + 1;
  //Update airplane
  airPlaneNewPos.x = (event.clientX * 3 / window.innerWidth) - 1.5;
  airPlaneNewPos.y = - (event.clientY * 1.6 / window.innerHeight) - 4.2;
  airPlaneGroup.rotation.z = airPlaneGroup.rotation.x = airPlaneNewPos.y - airPlaneGroup.position.y;
}
window.addEventListener("mousemove", onMouseMove, false);

//TOUCH EVENT FOR MOBILE
function onTouchMove(event) {
  mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
  mouse.y = (event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
  //Update airplane
  airPlaneNewPos.x = (event.changedTouches[0].clientX * 3 / window.innerWidth) - 1.5;
  airPlaneNewPos.y = - (event.changedTouches[0].clientY * 1.6 / window.innerHeight) - 4.2;
  airPlaneGroup.rotation.z = airPlaneGroup.rotation.x = airPlaneNewPos.y - airPlaneGroup.position.y;
}
window.addEventListener("touchmove", onTouchMove, false);

//UPDATE ACTIVE SECTION ON SCREEN
let options = {rootMargin: "0px", threshold: 0.75};
const callback = (entries) => {
  entries.forEach((entry) => {
    const { target } = entry;
    if (entry.intersectionRatio >= 0.75) {
      target.classList.add("is-visible");
    } else {
      target.classList.remove("is-visible");
    }
  });
};
const observer = new IntersectionObserver(callback, options);
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

//EXPAND NAVBAR HAMBURGER
const hamburgerLine = document.querySelectorAll(".line");
document
  .querySelector(".hamburger")
  .addEventListener("click", function(event) {
    if (this.classList.contains("is-active")) {
      this.classList.remove("is-active");
      document.querySelector(".subMenu").style.display = "none";
    } else {
      this.classList.add("is-active");
      document.querySelector(".subMenu").style.display = "flex";
    }
});

//COLLAPSE SUBMENU ON CHOOSE
const navLinks = document.querySelectorAll(".navEach");
navLinks.forEach((each) => {
  each.addEventListener("click", function(event) {
    if (document.querySelector(".subMenu").style.display === "flex") {
      document.querySelector(".subMenu").style.display = "none";
      document.querySelector(".hamburger").classList.remove("is-active");
    } 
  })
})

//WEB SLIDE
const totalWebSlide = document.querySelectorAll(".webProject").length;
let webSlidePos = 0;
let currentWebSlide = Math.ceil(totalWebSlide / 2);
//Next web
document
  ?.querySelector("#nextWebButton")
  ?.addEventListener("click", function(event) {
    const whoosh = new Audio("./audios/Whoosh.mp3");
    whoosh.play();
    document.querySelectorAll(".webProject")[currentWebSlide-1].classList.remove("is-in");
    document.querySelectorAll(".dotWeb")[currentWebSlide-1].classList.remove("is-at");
    if (currentWebSlide === totalWebSlide) {
      webSlidePos = -(webSlidePos);
      currentWebSlide = 1;
    } else {
      webSlidePos = webSlidePos - document.querySelector("#webWrapper").getBoundingClientRect().width / totalWebSlide;
      currentWebSlide = currentWebSlide + 1;
    }
});
//Previous web
document
  ?.querySelector("#prevWebButton")
  ?.addEventListener("click", function(event) {
    const whoosh = new Audio("./audios/Whoosh.mp3");
    whoosh.play();
    document.querySelectorAll(".webProject")[currentWebSlide-1].classList.remove("is-in");
    document.querySelectorAll(".dotWeb")[currentWebSlide-1].classList.remove("is-at");
    if (currentWebSlide === 1) {
      webSlidePos = -(webSlidePos);
      currentWebSlide = totalWebSlide;
    } else {
      webSlidePos = document.querySelector("#webWrapper").getBoundingClientRect().width / totalWebSlide + webSlidePos;
      currentWebSlide = currentWebSlide - 1;
    }
});

//GAME SLIDE
const totalGameSlide = document.querySelectorAll(".gameProject").length;
let gameSlidePos = 0;
let currentGameSlide = Math.ceil(totalGameSlide / 2);

//Next game
document
  ?.querySelector("#nextGameButton")
  ?.addEventListener("click", function(event) {
    const whoosh = new Audio("./audios/Whoosh.mp3");
    whoosh.play();
    document.querySelectorAll(".gameProject")[currentGameSlide-1].classList.remove("is-in");
    document.querySelectorAll(".dotGame")[currentGameSlide-1].classList.remove("is-at");
    if (currentGameSlide === totalGameSlide) {
      gameSlidePos = -(gameSlidePos);
      currentGameSlide = 1;
    } else {
      gameSlidePos = gameSlidePos - document.querySelector("#gameWrapper").getBoundingClientRect().width / totalGameSlide;
      currentGameSlide = currentGameSlide + 1;
    }
});
//Previous game
document
  ?.querySelector("#prevGameButton")
  ?.addEventListener("click", function(event) {
    const whoosh = new Audio("./audios/Whoosh.mp3");
    whoosh.play();
    document.querySelectorAll(".gameProject")[currentGameSlide-1].classList.remove("is-in");
    document.querySelectorAll(".dotGame")[currentGameSlide-1].classList.remove("is-at");
    if (currentGameSlide === 1) {
      gameSlidePos = -(gameSlidePos);
      currentGameSlide = totalGameSlide;
    } else {
      gameSlidePos = document.querySelector("#gameWrapper").getBoundingClientRect().width / totalGameSlide + gameSlidePos;
      currentGameSlide = currentGameSlide - 1;
    }
});

//IMAGE SLIDE
//Next image
document.querySelectorAll(".nextImg").forEach((each) => {
  each.addEventListener("click", function () {
    const whoosh = new Audio("./audios/Whoosh.mp3");
    whoosh.play();

    const project = this.closest(".project");
    const imageTrack = project.children[1].children[0]; // image container
    const indicators = project.children[2].children[1].children; // dot indicators
    const tracker = project.children[3]; // hidden tracker div
    const imageWidth = project.children[1].getBoundingClientRect().width;
    const totalImages = indicators.length;

    // Use tracker width as index
    let currentIndex = parseInt(tracker.style.width || "0");

    // Remove current focus
    indicators[currentIndex].classList.remove("is-focus");

    // Update index
    currentIndex = (currentIndex + 1) % totalImages;

    // Add new focus
    indicators[currentIndex].classList.add("is-focus");

    // Move carousel
    imageTrack.style.translate = `-${imageWidth * currentIndex}px`;

    // Store index in width (or better use dataset in real case)
    tracker.style.width = currentIndex;
  });
});

//Previous image
document.querySelectorAll(".prevImg").forEach((each) => {
  each.addEventListener("click", function () {
    const whoosh = new Audio("./audios/Whoosh.mp3");
    whoosh.play();

    const project = this.closest(".project");
    const imageTrack = project.children[1].children[0]; // image slider container
    const indicators = project.children[2].children[1].children;
    const tracker = project.children[3]; // element holding current index
    const imageWidth = project.children[1].getBoundingClientRect().width;
    const totalImages = indicators.length;

    // Get current index from data attribute
    let currentIndex = parseInt(tracker.dataset.index || "0");

    // Remove current dot
    indicators[currentIndex].classList.remove("is-focus");

    // Move back one image (loop to last if at 0)
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;

    // Add new dot
    indicators[currentIndex].classList.add("is-focus");

    // Move slider
    imageTrack.style.translate = `-${imageWidth * currentIndex}px`;

    // Save new index
    tracker.dataset.index = currentIndex;
  });
});


// OPEN CONTACT FORM
document
  ?.querySelector(".secMail")
  ?.addEventListener("click", function(event) {
    document.querySelector("#contactForm").classList.remove("hidden_layer");
    document.querySelector("nav").classList.add("nav_hidden");
    document.querySelector("footer").classList.add("nav_hidden");
    setTimeout(() => {
      document.querySelector("#contactForm").style.opacity = 1;
    }, '10');
});
document
  ?.querySelector("#closeContactForm")
  ?.addEventListener("click", function(event) {
    document.querySelector("nav").classList.remove("nav_hidden");
    document.querySelector("footer").classList.remove("nav_hidden");
    document.querySelector("#contactForm").style.opacity = 0;
    setTimeout(() => {
      document.querySelector("#contactForm").classList.add("hidden_layer");
    }, '500');
});
document
  ?.querySelector("#contact_form_submit")
  ?.addEventListener("click", function(event) {
    const name = document.querySelector("#contact_name").value;
    const email = document.querySelector("#contact_email").value;
    const subject = document.querySelector("#contact_subject").value;
    const message = document.querySelector("#contact_message").value;
    if (name && email && subject && message) {
      let emailValid = false
      if (email.includes('@')) {
        const parts = email.split('@')
        if (parts[1].length > 3) {
          if (parts[1].includes('.')) {
            const after = parts[1].split('.')
            if (after[1].length > 1) {
              emailValid = true
            }
          }
        }
      }
      if (emailValid) {
        document.querySelector("#contact_form_submit").classList.add("secMail_active");
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              user_id: 'FCPt1EIYp5ib1ELvH',
              service_id: 'service_gbz0gz8',
              template_id: 'template_2uwkp26',
              template_params: {
                  'name': name,
                  'email': email,
                  'subject': subject,
                  'message': message
              }
            })
          })
          .then((httpResponse) => {
            document.querySelector("#contact_form_submit").classList.remove("secMail_active");
            if (httpResponse.ok) {
              if (document.querySelector(".contact_form_success").classList.contains("contact_form_hide")) {
                document.querySelector(".contact_form_success").classList.remove("contact_form_hide");
                setTimeout(() => {
                  document.querySelector("nav").classList.remove("nav_hidden");
                  document.querySelector("footer").classList.remove("nav_hidden");
                  document.querySelector("#contactForm").style.opacity = 0;
                  setTimeout(() => {
                    document.querySelector("#contactForm").classList.add("hidden_layer");
                  }, '500');
                }, '2000');
              }
            } else {
              if (document.querySelector(".contact_form_mail_error").classList.contains("contact_form_hide")) {
                document.querySelector(".contact_form_mail_error").classList.remove("contact_form_hide");
                setTimeout(() => {
                  document.querySelector(".contact_form_mail_error").classList.add("contact_form_hide");
                }, '3000');
              }
            }
          })
          .catch((error) => {
            if (document.querySelector(".contact_form_mail_error").classList.contains("contact_form_hide")) {
              document.querySelector(".contact_form_mail_error").classList.remove("contact_form_hide");
              setTimeout(() => {
                document.querySelector(".contact_form_mail_error").classList.add("contact_form_hide");
              }, '3000');
            }
          });
      } else {
        if (document.querySelector(".contact_form_mail_inv").classList.contains("contact_form_hide")) {
          document.querySelector(".contact_form_mail_inv").classList.remove("contact_form_hide");
          setTimeout(() => {
            document.querySelector(".contact_form_mail_inv").classList.add("contact_form_hide");
          }, '3000');
        }
      }
    } else {
      if (document.querySelector(".contact_form_missing").classList.contains("contact_form_hide")) {
        document.querySelector(".contact_form_missing").classList.remove("contact_form_hide");
        setTimeout(() => {
          document.querySelector(".contact_form_missing").classList.add("contact_form_hide");
        }, '3000');
      }
    }
});

//BUTTON BACK TO TOP
document
  .querySelector(".backToTop")
  .addEventListener("click", function(event) {
    highLightNavLink(1);
    changeFooter(1);
    toggleStars(black);
    lightTopColor.setHex(yellow);
    lightBackColor.setHex(red);
    rectLightColor.setHex(purple);
    updateCamPos.set(-0.3, 0, 5);
});

//SOUND TOGGLE
const backgroundSound = new Audio("./audios/Gratitude_Spiritual-Moment.mp3");
let soundOn = true;
document
  .querySelector(".sound")
  .addEventListener("click", function(event) {
    if (soundOn === true) {
      this.style.opacity = 1;
      backgroundSound.pause();
      this.style.backgroundImage = "url('./images/icon-mute-96.webp')";
      soundOn = false;
    } else {
      this.style.opacity = 0.2;
      backgroundSound.play();
      backgroundSound.volume = 0.5;
      backgroundSound.loop = true;
      this.style.backgroundImage = "url('./images/icon-sound-96.webp')";
    soundOn = true;
    }
});

//WHOOSH SOUND
document.querySelectorAll("a").forEach((each) => {
  each.addEventListener("click", function(event) {
    const whoosh = new Audio("./audios/Whoosh.mp3");
    whoosh.play();
  });
});

// Open game in iframe
document.addEventListener('click', (e) => {
  const link = e.target.closest('.softwareIconGameLink');
  if (link) {
    e.preventDefault();
    const gameUrl = link.dataset.gameUrl;
    if (gameUrl) {
      document.getElementById('game-iframe').src = gameUrl;
      document.getElementById('game-overlay').style.display = 'flex';
      backgroundSound.pause();
    }
  }
});

// Close game overlay
document.getElementById('close-game')?.addEventListener('click', () => {
  document.getElementById('game-overlay').style.display = 'none';
  document.getElementById('game-iframe').src = '';
});

//FUNCTIONS FOR ANIMATION
//highlight navlink according to section
let sections = document.querySelectorAll("section");
let staticSectionNumber = 1;
function highLightNavLink(number) {
  navLinks.forEach((each) => {
    each.style.color = "beige";
    each.style.fontStyle = "normal";
    each.classList.remove("is-on");
  });
  hamburgerLine.forEach((each) => {
    each.style.backgroundColor = "beige";
  });
  if (number > 1) {
    navLinks[number - 2].style.color = "goldenrod";
    navLinks[number - 2].style.fontStyle = "italic";
    navLinks[number - 2].classList.add("is-on");
    navLinks[number + 2].style.color = "goldenrod";
    navLinks[number + 2].style.fontStyle = "italic";
    navLinks[number + 2].classList.add("is-on");
    hamburgerLine[number-2].style.backgroundColor = "goldenrod";
  }
}
//highlight hamburger line
function highLightHamburger(number) {
  hamburgerLine.forEach((each) => {
    each.style.backgroundColor = "beige";
  });
  if (number > 1) {
    hamburgerLine[number-2].style.backgroundColor = "goldenrod";
  }
}
//change footer according to section
function changeFooter(setting) {
  if (setting === 5) {
    document.querySelector("footer").style.justifyContent = "space-between";
    document.querySelector(".backToTop").style.display = "block";
    document.querySelector(".copyright").style.display = "inline";
    document.querySelector(".moveUp").style.display = "none";
  } else if (setting === 2) {
    document.querySelector("footer").style.justifyContent = "flex-end";
    document.querySelector(".backToTop").style.display = "none";
    document.querySelector(".copyright").style.display = "none";
    document.querySelector(".moveUp").style.display = "block";
  } else {
    document.querySelector("footer").style.justifyContent = "flex-end";
    document.querySelector(".backToTop").style.display = "none";
    document.querySelector(".copyright").style.display = "none";
    document.querySelector(".moveUp").style.display = "none";
  }
}
//Change stars color
function toggleStars(color) {
  starGroup.children.forEach((each) => {
    each.material.color.setHex(color);
  })
}
//Update project size according to orientation
function projectResize() {
  if (window.innerWidth > 820) {
    const isPortrait = (window.innerHeight / window.innerWidth) >= 0.9;
    const projectElements = document.querySelectorAll(".project");
    const pictureElements = document.querySelectorAll(".picture");

    // Set width for .project and .picture elements
    const widthValue = isPortrait ? "65vw" : "30vw";
    projectElements.forEach((each) => {
      if (each) each.style.width = widthValue;
    });
    pictureElements.forEach((each) => {
      if (each) each.style.width = widthValue;
    });

    // Button transformations
    const transformValue = isPortrait ? "translateX(0)" : "translateX(calc(20vw - 30px))";
    const transformValueOpposite = isPortrait ? "translateX(0)" : "translateX(calc(-20vw + 30px))";

    const prevWebBtn = document.querySelector("#prevWebButton");
    const nextWebBtn = document.querySelector("#nextWebButton");
    const prevGameBtn = document.querySelector("#prevGameButton");
    const nextGameBtn = document.querySelector("#nextGameButton");

    if (prevWebBtn) prevWebBtn.style.transform = transformValue;
    if (nextWebBtn) nextWebBtn.style.transform = transformValueOpposite;
    if (prevGameBtn) prevGameBtn.style.transform = transformValue;
    if (nextGameBtn) nextGameBtn.style.transform = transformValueOpposite;
  }
}



//ANIMATION
const animate = () => {
  // Scene1
  // Particles spin around
  if (particlesGroup) particlesGroup.rotation.y += 0.004;

  // Particles rotate
  const time = performance.now() * 0.0003;
  particlesGroup?.children?.forEach((each) => {
    each.rotation.x += each.speedValue / 10;
    each.rotation.y += each.speedValue / 10;
    each.rotation.z += each.speedValue / 10;
  });

  // Cubes rotate & fly around
  cubesGroup?.children?.forEach((each) => {
    each.rotation.x += 0.008;
    each.rotation.y += 0.005;
    each.rotation.z += 0.003;
    each.position.x = Math.sin(time * each.positionZ) * each.positionY;
    each.position.y = Math.cos(time * each.positionX) * each.positionZ;
    each.position.z = Math.sin(time * each.positionY) * each.positionX;
  });

  // Cube group rotate follow mouse
  if (cubesGroup) {
    cubesGroup.rotation.y -= (mouse.x * 4 + cubesGroup.rotation.y) * 0.1;
    cubesGroup.rotation.x -= (-mouse.y * 4 + cubesGroup.rotation.x) * 0.1;
  }

  // Scene2
  // Earth spin around
  if (earthGroup) earthGroup.rotation.y -= 0.005;

  // Earth wave
  const earthMesh = earthGroup?.children?.[0];
  const positionAttr = earthMesh?.geometry?.attributes?.position;
  const posData = earthMesh?.geometry?.positionData;

  if (earthMesh && positionAttr && posData) {
    posData.forEach((p, idx) => {
      let setNoise = noise(p.x, p.y, p.z, clock.getElapsedTime());
      wave.copy(p).addScaledVector(p, setNoise);
      positionAttr.setY(idx, wave.y);
    });
    earthMesh.geometry.computeVertexNormals();
    positionAttr.needsUpdate = true;
  }

  // Airplane fan
  if (airPlaneGroup?.children?.[0]) airPlaneGroup.children[0].rotation.x += 0.3;
  if (airPlaneGroup?.children?.[1]) airPlaneGroup.children[1].rotation.x += 0.3;

  // Airplane flag animation
  const flag = airPlaneGroup?.children?.[2];
  const flagPos = flag?.geometry?.attributes?.position;
  if (flag && flagPos) {
    for (let i = 0; i < flagVertexCount; i++) {
      const x = flagPos.getX(i);
      const y = flagPos.getY(i);
      const xangle = x + Date.now() / 200;
      const xsin = Math.sin(xangle) * 0.6;
      const yangle = y + Date.now() / 200;
      const ycos = Math.cos(yangle) * 0.1;
      flagPos.setZ(i, xsin + ycos);
    }
    flag.geometry.computeVertexNormals();
    flagPos.needsUpdate = true;
  }

  // Move airplane follow mouse
  airPlaneGroup?.position?.lerp?.(airPlaneNewPos, 0.1);

  // Check current section on screen
  let currentSection = document.querySelector(".is-visible");
  const sectionActions = [
    () => {
      changeFooter(1);
      lightTopColor.setHex(yellow);
      lightBackColor.setHex(red);
      rectLightColor.setHex(purple);
      updateCamPos.set(-0.3, 0, 5); 
    },
    () => {
      changeFooter(2);
      toggleStars(black);
      lightTopColor.setHex(green);
      lightBackColor.setHex(yellow);
      rectLightColor.setHex(purple);
      updateCamPos.set(-0.55, 0, 5);
    },
    () => {
      changeFooter(3);
      toggleStars(black);
      lightTopColor.setHex(cyan);
      lightBackColor.setHex(purple);
      rectLightColor.setHex(blue);
      updateCamPos.set(-0.1, 0, 5);
    },
    () => {
      changeFooter(4);
      toggleStars(black);
      lightTopColor.setHex(red);
      lightBackColor.setHex(purple);
      rectLightColor.setHex(blue);
      updateCamPos.set(-0.1, 0, 5);
    },
    () => {
      changeFooter(5);
      toggleStars(0x545454);
      lightTopColor.setHex(black);
      lightBackColor.setHex(black);
      rectLightColor.setHex(black);
      updateCamPos.set(0, -4.5, 10); // game initiator
    }
  ];

  sections?.forEach((section, index) => {
    if (currentSection === section && staticSectionNumber !== index + 1) {
      sectionActions[index]?.();
      staticSectionNumber = index + 1;
    }
  });

  // Update hamburger arrow
  const subMenu = document.querySelector(".subMenu");
  if (subMenu?.style?.display === "flex") {
    if (hamburgerLine?.[0]) hamburgerLine[0].style.backgroundColor = "goldenrod";
    if (hamburgerLine?.[3]) hamburgerLine[3].style.backgroundColor = "goldenrod";
  } else {
    highLightHamburger?.(staticSectionNumber);
  }

  // Update web project slide
  const webWrapper = document.querySelector("#webWrapper");
  if (webWrapper) webWrapper.style.translate = webSlidePos + "px";

  const webDots = document.querySelectorAll(".dotWeb");
  const webProjects = document.querySelectorAll(".webProject");
  if (webDots?.[currentWebSlide - 1]) webDots[currentWebSlide - 1].classList.add("is-at");
  if (webProjects?.[currentWebSlide - 1]) webProjects[currentWebSlide - 1].classList.add("is-in");

  // Update game project slide
  const gameWrapper = document.querySelector("#gameWrapper");
  if (gameWrapper) gameWrapper.style.translate = gameSlidePos + "px";

  const gameDots = document.querySelectorAll(".dotGame");
  const gameProjects = document.querySelectorAll(".gameProject");
  if (gameDots?.[currentGameSlide - 1]) gameDots[currentGameSlide - 1].classList.add("is-at");
  if (gameProjects?.[currentGameSlide - 1]) gameProjects[currentGameSlide - 1].classList.add("is-in");

  // Update screen
  camera?.position?.lerp?.(updateCamPos, 0.05);
  lightTop?.color?.lerp?.(lightTopColor, 0.05);
  lightBack?.color?.lerp?.(lightBackColor, 0.05);
  rectLight?.color?.lerp?.(rectLightColor, 0.05);

  renderer?.render?.(scene, camera);
  requestAnimationFrame(animate);
};

//Fetch & populate new games
async function loadNewGames() {
  try {
    const response = await fetch(
      'https://prod.in.asgard.apis.simpleviralgames.com/game/category/new-releases?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null',
      {
        headers: {
          'client-id': '50202bba-0a97-40cf-b980-7b62b1cfad0e'
        }
      }
    )
    const data = await response.json();
    const games = data?.results?.games || [];
    const gameSection = document.getElementById('skill');
    games?.forEach(game => {
      const a = document.createElement('a');
      a.href = '#';
      a.dataset.gameUrl = game.url;
      a.classList.add('softwareIconGameLink');
      const img = document.createElement('img');
      img.src = game?.property?.image;
      img.alt = game?.property?.name || (typeof window.t === 'function' ? window.t('gameAlt') : 'Game')
      img.classList.add('softwareIconGame');
      a.appendChild(img);
      gameSection?.appendChild(a);
    });
  } catch (error) {
    console.error('Failed to load games:', error);
  }
}


// Fetch games + category


const mainContainer = document.getElementById('game-category-container');

const endpointLabelKeys = {
  'top-10-games': 'categoryTop10',
  'vip-games': 'categoryVIP',
  'games-with-leaderboard': 'categoryLeaderboard',
  'train-your-brain': 'categoryTrainBrain',
  'soothing': 'categorySoothing',
  'quick-break-at-work': 'categoryQuickBreak',
  'sports': 'categorySports',
  'multiplayer': 'categoryMultiplayer',
  'all-games': 'categoryAll',
};
const endpoints = [
  { key: 'top-10-games' },
  { key: 'vip-games' },
  { key: 'games-with-leaderboard' },
  { key: 'train-your-brain' },
  { key: 'soothing' },
  { key: 'quick-break-at-work' },
  { key: 'sports' },
  { key: 'multiplayer' },
  { key: 'all-games' },
];

const baseUrl =
  'https://prod.in.asgard.apis.simpleviralgames.com/game/category/';
const headers = {
  'client-id': '50202bba-0a97-40cf-b980-7b62b1cfad0e',
};

async function fetchAllPages(endpointKey) {
  const allGames = [];

  const fetchPage = async (pageNum) => {
    const url = `${baseUrl}${endpointKey}?p=${pageNum}&platform=B2BW&language=en&multiplayer=false&access_token=null`;
    const res = await fetch(url, { headers });
    return res.json();
  };

  try {
    const firstPage = await fetchPage(1);
    const totalPages = Math.min(firstPage?.total_page || 1, 2); // Limit to max 2 pages
    allGames.push(...(firstPage?.results?.games || []));

    const pagePromises = [];
    for (let p = 2; p <= totalPages; p++) {
      pagePromises.push(fetchPage(p));
    }

    const remainingPages = await Promise.all(pagePromises);
    for (const result of remainingPages) {
      allGames.push(...(result?.results?.games || []));
    }

    return allGames;
  } catch (err) {
    console.error(`Error fetching ${endpointKey}:`, err);
    return [];
  }
}


async function fetchAndRenderAll() {
  for (const endpoint of endpoints) {
    const section = document.createElement('div');
    section.className = endpoint?.key === 'all-games' ? 'category-section category-section-active' : 'category-section';

    section.id = `category-${endpoint.key}`; // Unique ID

    const title = document.createElement('div');
    title.className = 'secPortTit content1';
    title.innerText = typeof window.t === 'function' ? window.t(endpointLabelKeys[endpoint.key] || endpoint.key) : endpoint.key;

    const games = await fetchAllPages(endpoint.key);

    const gameSection = document.createElement('div');
    gameSection.classList.add('category-skill');

    games?.forEach((game) => {
      const a = document.createElement('a');
      a.href = '#';
      a.dataset.gameUrl = game?.url;
      a.classList.add('softwareIconGameLink');

      const img = document.createElement('img');
      img.src = game?.property?.image || '';
      img.alt = game?.property?.name || (typeof window.t === 'function' ? window.t('gameAlt') : 'Game');
      img.classList.add('softwareIconGame');

      a.appendChild(img);
      gameSection.appendChild(a);
    });

    section.appendChild(title);
    section.appendChild(gameSection);
    mainContainer?.appendChild(section);
  }
}

// fetch other category games

async function loadCategoryGames() {
  try {
    const response = await fetch(
      'https://prod.in.asgard.apis.simpleviralgames.com/game/category/all-games?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null',
      {
        headers: {
          'client-id': '50202bba-0a97-40cf-b980-7b62b1cfad0e'
        }
      }
    )
    const data = await response.json();
    const games = data?.results?.games?.slice(0, 4) || [];
    const gameSection = document.getElementById('game-category-container-other');
    games?.forEach(game => {
      const a = document.createElement('a');
      a.href = '#';
      a.dataset.gameUrl = game.url;
      a.classList.add('softwareIconGameLink');
      const img = document.createElement('img');
      img.src = game?.property?.image;
      img.alt = game?.property?.name || (typeof window.t === 'function' ? window.t('gameAlt') : 'Game')
      img.classList.add('softwareIconGame');
      a.appendChild(img);
      gameSection?.appendChild(a);
    });
  } catch (error) {
    console.error('Failed to load games:', error);
  }
}


window.scrollTo({ top: 0, behavior: "smooth" });
Array(30).fill().forEach(generateCube);
Array(200).fill().forEach(generateParticle);
generateEarth();
Array(60).fill().forEach(generateCloud);
Array(80).fill().forEach(generateStar);
generateAirPlane();
projectResize()
animate();

loadNewGames();

loadCategoryGames();

fetchAndRenderAll();


// listener to toggle categories

document.querySelectorAll('a.seemoreButton').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.dataset.target;
    if (!targetId) return;

    // Hide all category sections
    document.querySelectorAll('.category-section').forEach(section => {
      section.classList.remove('category-section-active');
    });

    // Show selected section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('category-section-active');

      // 👇 Scroll to section4 after showing category
      const scrollTarget = document.getElementById('section4');
      if (scrollTarget) {
        scrollTarget.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // (Optional) active styling for selected anchor
    document.querySelectorAll('a.category-link').forEach(a => a.classList.remove('active'));
    this.classList.add('active');


  });
});



