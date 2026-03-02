// Game data
const gamesData = [
  {
    name: "Mine Rusher",
    url: "https://cdn.timepass.games/games/05cb773c-9b54-4773-aedc-24a42b568584/aee3cd6b-808d-432b-be3d-e0efe6b2f2ee/",
    thumbnail: "https://cdn.timepass.games/images/b74fdc93-2184-4ece-805b-069e21ba4845.webp",
    categories: ["All Games"]
  },
  {
    name: "Sling Tomb",
    url: "https://cdn.timepass.games/games/66550db6-b343-4464-b34c-8bbd70119da7/50a48faa-d9af-4264-80d1-b85981c4ccc7/",
    thumbnail: "https://cdn.simpleviralgames.com/images/16883c16-6aa3-48af-8254-3ec167bf1810.webp",
    categories: ["All Games"]
  },
  {
    name: "Mahjong Solitaire",
    url: "https://cdn.timepass.games/games/bc929069-0670-49fd-821f-c3085604e9d8/e94f1719-5136-4dd5-b8ea-8a1b72874a96/",
    thumbnail: "https://cdn.timepass.games/images/adf199f1-858e-46ac-bcc8-98e689f90cae.webp",
    categories: ["All Games"]
  },
  {
    name: "Draw The Rest",
    url: "https://cdn.timepass.games/games/f67c362d-1b8e-43f9-a664-5fdacd00566f/deb2af43-72f7-4ff2-bda6-c90541553fc3/",
    thumbnail: "https://cdn.simpleviralgames.com/images/bb13f01c-c64f-4d73-a94e-216dd5c70d2f.webp",
    categories: ["All Games"]
  },
  {
    name: "Plane Shooter",
    url: "https://cdn.timepass.games/games/3a629624-e93b-4254-a3b7-2a6dd672603e/f87a5424-8e8d-43c9-b637-67bd0815dfec/",
    thumbnail: "https://cdn.simpleviralgames.com/images/778f333c-e577-4c42-b173-0f727f2d69d4.webp",
    categories: ["All Games"]
  },
  {
    name: "Pinball",
    url: "https://cdn.timepass.games/games/638590c1-dffd-4472-aab5-e487876cf40b/b9e29477-30f5-40be-a068-3cd6c74b2d22/",
    thumbnail: "https://cdn.timepass.games/images/86effeca-2f9b-471e-8222-81b418154c30.webp",
    categories: ["All Games", "Easy to Play", "Arcade"]
  },
  {
    name: "Draw Parking",
    url: "https://cdn.timepass.games/games/76edfca4-d152-41f3-9b85-121afd48114d/9b8afc52-8ae7-43dd-b708-a3b85d30ec99/",
    thumbnail: "https://cdn.timepass.games/images/0e0b6ae2-1089-44ad-923a-1fc66f372aa5.webp",
    categories: ["Top 10 Games", "All Games", "Easy to Play"]
  },
  {
    name: "Disk Throw",
    url: "https://cdn.timepass.games/games/3e9874b7-6ae2-4b1d-a03f-e4e7afb8b21d/3fc4f7ef-6e82-4f5d-b76b-0a5cf6a62c12/",
    thumbnail: "https://cdn.timepass.games/images/rdkmdgzgne.webp",
    categories: ["All Games", "Easy to Play"]
  },
  {
    name: "Golf Field",
    url: "https://cdn.timepass.games/games/ad679fcd-8d23-4fae-958e-e5458d85c3cb/590501a3-5b54-4ea2-9f26-8051ce278504/",
    thumbnail: "https://cdn.timepass.games/images/b5a85350-4415-4ad8-902d-5ad3993de95e.webp",
    categories: ["All Games", "Easy to Play", "Arcade"]
  },
  {
    name: "Jumping Ball",
    url: "https://cdn.timepass.games/games/365c0a8d-fe76-479e-ab21-01e42eeaa13d/d2677155-073e-4a87-b4b7-a0bb60deb534/",
    thumbnail: "https://cdn.timepass.games/images/256b8f7d-d967-42c3-a19f-0592eab7696c.webp",
    categories: ["All Games", "Arcade"]
  },
  {
    name: "Word Search 2",
    url: "https://cdn.timepass.games/games/cd325bd8-f518-4a47-b5b5-8260d49b7a64/b6355aec-ef96-4008-a695-eb2663869d5b/",
    thumbnail: "https://cdn.timepass.games/images/96fcf343-0f18-47e9-8e97-db78351bd40c.webp",
    categories: ["Top 10 Games", "All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Path Control",
    url: "https://cdn.timepass.games/games/7cf88aaf-ff21-4ddf-8151-8cefe72374a4/da389ea3-a94a-473b-85b6-ff65d2595ace/",
    thumbnail: "https://cdn.timepass.games/images/dibafecjwc.webp",
    categories: ["Top 10 Games", "All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Rope Bawling",
    url: "https://cdn.timepass.games/games/c87d3aef-358a-4db1-9543-f31f40144236/22519678-ead9-423c-84c6-e40bdb7d01d6/",
    thumbnail: "https://cdn.timepass.games/images/chafyrtssj.webp",
    categories: ["All Games", "Easy to Play", "Arcade"]
  },
  {
    name: "Water Sort 2",
    url: "https://cdn.timepass.games/games/d4f51a91-ac7d-4e51-8743-aeb04aa785cc/77699e88-698d-4be3-ac00-cfff056485c9/",
    thumbnail: "https://cdn.simpleviralgames.com/images/8bcbaffc-36b7-49a9-8a6e-4ee911a9290d.webp",
    categories: ["Top 10 Games", "All Games", "Puzzle"]
  },
  {
    name: "Happy Filled Glass 3",
    url: "https://cdn.timepass.games/games/8e40178e-2457-4dc1-ae60-add884f03f54/7f463157-8984-48fe-86e7-467047a4746b/",
    thumbnail: "https://cdn.timepass.games/images/f804e254-5946-4ee3-b400-a4d4cd4eafa3.webp",
    categories: ["Top 10 Games", "All Games", "Puzzle"]
  },
  {
    name: "Filled Glass",
    url: "https://cdn.timepass.games/games/39b82257-d32b-4635-ab73-e338e7092e3b/d0cf5ca1-f0f5-44a9-8a12-aa0f9985e320/",
    thumbnail: "https://cdn.timepass.games/images/tpbgwvlcek.webp",
    categories: ["All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Zombie Crusher",
    url: "https://cdn.timepass.games/games/9cac2c11-67b6-4303-891a-f3c5fe9d4b03/a15f234b-2818-4ea1-91d9-1f8e30e5a396/",
    thumbnail: "https://cdn.timepass.games/images/ebf2dbe2-7ecc-463a-a844-946bb4b275b4.webp",
    categories: ["All Games", "Easy to Play", "Action"]
  },
  {
    name: "Soccer Free Kick",
    url: "https://cdn.timepass.games/games/7fef838f-cb11-4296-b289-d1b44236a66c/d85f3049-c241-4204-a045-9df040dd7137/",
    thumbnail: "https://cdn.timepass.games/images/lcxgyvpymf.webp",
    categories: ["All Games", "Easy to Play", "Action"]
  },
  {
    name: "Coloured Water And Pin",
    url: "https://cdn.timepass.games/games/1cf52380-4aa2-40a1-b255-d76e8f99c920/48a669cb-d918-4672-ad3b-be0ea0eb7bc1/",
    thumbnail: "https://media.simpleviralgames.com/images/swtnvgdxne.webp",
    categories: ["All Games", "Easy to Play"]
  },
  {
    name: "Flappy UFO",
    url: "https://cdn.timepass.games/games/bc249551-0bce-46d0-9760-3d249d2db2c9/e7c52d5c-d943-4662-9fe8-8607751dcaac/",
    thumbnail: "https://cdn.timepass.games/images/f9d2fe90-da86-4c3f-8da0-179e6a8fefeb.webp",
    categories: ["All Games", "Easy to Play", "Action"]
  },
  {
    name: "Racoon Rescue",
    url: "https://cdn.timepass.games/games/8a31626c-daea-47ef-8112-ec3388960b10/cee72dd3-bc59-4305-8876-51abc46360c5/",
    thumbnail: "https://cdn.timepass.games/images/qawbgrinzp.webp",
    categories: ["Top 10 Games", "All Games", "Action"]
  },
  {
    name: "Fantasy Forest",
    url: "https://cdn.timepass.games/games/a640e65e-f8cf-45ed-904b-6f95e125c358/699be819-8b88-4e6d-a042-c3c0f5bcfc62/",
    thumbnail: "https://cdn.timepass.games/images/xvmhylbhxe.webp",
    categories: ["All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Dig The Way Up",
    url: "https://cdn.timepass.games/games/2bb41d75-521a-4905-bfde-819db24e353f/87afae6f-005d-4366-8a17-d96ab07673e6/",
    thumbnail: "https://cdn.timepass.games/images/bfjgemfozs.webp",
    categories: ["Top 10 Games", "All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Word Game",
    url: "https://cdn.timepass.games/games/538ff814-69c1-4bea-a072-a2ca6504ff95/26254883-f4c0-4fdc-bc15-6f58e15c9c06/",
    thumbnail: "https://cdn.simpleviralgames.com/images/d6757053-2cc4-45cf-89aa-bbe21f215f2c.webp",
    categories: ["All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Stack Builder",
    url: "https://cdn.timepass.games/games/fe35e910-31a9-4759-abdb-5549ad5feb7f/402bbc3a-3ebf-4e0f-8c0a-1f4367315c98/",
    thumbnail: "https://cdn.timepass.games/images/cf9f42e4-d560-4c9a-8b49-ae5ad4a52daf.webp",
    categories: ["All Games", "Easy to Play", "Arcade"]
  },
  {
    name: "Little Panda",
    url: "https://cdn.timepass.games/games/9ba9bef2-8483-4c94-92a3-b3896a3e9c9b/f4311c05-9336-4be6-babe-3febf30a73e0/",
    thumbnail: "https://cdn.simpleviralgames.com/images/aef9b868-a916-42ff-956a-3ac5ed6f2dcc.webp",
    categories: ["All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Block Puzzle",
    url: "https://cdn.timepass.games/games/c391c22f-189e-4939-b5ce-84015e81f496/0fbff431-d452-41ae-b86a-58ec082ccc4d/",
    thumbnail: "https://cdn.timepass.games/images/415bd359-78a1-4fce-b67f-2f34204b0287.webp",
    categories: ["All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "World Cup Glass",
    url: "https://cdn.timepass.games/games/a5864009-0b38-4888-8706-4f6f3181c8b6/e48d2c3b-d0ea-4dca-a1ca-6e494f95b465/",
    thumbnail: "https://cdn.timepass.games/images/fazwujgsya.webp",
    categories: ["All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Whack A Mole",
    url: "https://cdn.timepass.games/games/c36487ad-db9a-4376-86cc-8d792c4e3196/06fe9a19-ab13-46d2-be11-3fc61daa2f66/",
    thumbnail: "https://cdn.timepass.games/images/1bedc458-bb25-4c9e-ba12-ff48ce262944.webp",
    categories: ["All Games", "Easy to Play", "Action"]
  },
  {
    name: "Black Hole Square",
    url: "https://cdn.timepass.games/games/5f09f9c0-ebdc-44f7-a597-ce126f1395b9/f9d4e2d3-46af-4761-a0b0-0660fb7458d0/",
    thumbnail: "https://cdn.timepass.games/images/lubivxftjq.webp",
    categories: ["All Games", "Puzzle"]
  },
  {
    name: "Matchimals",
    url: "https://cdn.timepass.games/games/22d40dbe-484e-42ca-88fc-750cfbc37c47/698e2601-581c-45ff-a35f-68a9670f4968/",
    thumbnail: "https://cdn.timepass.games/images/xjvcumrfge.webp",
    categories: ["Top 10 Games", "All Games", "Puzzle"]
  },
  {
    name: "Hexahedral",
    url: "https://cdn.timepass.games/games/9e9aa8a9-345a-4f0e-b422-b416c240a900/6170624b-323d-45c8-baf5-94155ecbda7c/",
    thumbnail: "https://cdn.timepass.games/images/pvvdqjvaat.webp",
    categories: ["All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Dribble King",
    url: "https://cdn.timepass.games/games/e1af349e-4ff6-4d3d-846f-e4c2d4a8ce6f/e8850a72-9033-47bb-b879-1ebebe318c38/",
    thumbnail: "https://cdn.timepass.games/images/f7e465b2-f361-4006-8b36-d962dce2856b.webp",
    categories: ["All Games", "Easy to Play"]
  },
  {
    name: "Rubiks Cube",
    url: "https://cdn.timepass.games/games/88a689b6-3137-4f35-94ed-0d6e318581b0/dbce83c8-9929-4076-a8a1-e583aae15b10/",
    thumbnail: "https://cdn.timepass.games/images/lzpoamoefw.webp",
    categories: ["All Games", "Puzzle"]
  },
  {
    name: "Tap Tap Tap",
    url: "https://cdn.timepass.games/games/5e970330-ede7-41b3-94d3-35501b931ac3/d88286a7-184b-433b-8502-9b399aac2f8f/",
    thumbnail: "https://media.simpleviralgames.com/images/eodwkhywps.webp",
    categories: ["All Games", "Easy to Play", "Action"]
  },
  {
    name: "Tetris",
    url: "https://cdn.timepass.games/games/069189e0-90a3-4322-bd77-427a491ad2ca/1bab70f8-b316-47b0-a7dd-5534cc3a523d/",
    thumbnail: "https://cdn.timepass.games/images/c6576ae5-de52-4c36-b82f-bd689a24dc73.webp",
    categories: ["All Games", "Easy to Play"]
  },
  {
    name: "Stack",
    url: "https://cdn.timepass.games/games/954a1061-ab71-4cf2-b203-bbfe8be0ee3e/65f8fba3-6fe5-436d-9fad-637c137bdfaf/",
    thumbnail: "https://cdn.timepass.games/images/a20aefe1-6346-4087-a511-74266d3cf351.webp",
    categories: ["All Games", "Easy to Play", "Arcade"]
  },
  {
    name: "One",
    url: "https://cdn.timepass.games/games/f6e1211a-8545-4800-b1a3-9692a51ddb0d/c61ff222-7d97-4069-9a8b-316da845e079/",
    thumbnail: "https://cdn.timepass.games/images/fonyudyjcq.webp",
    categories: ["All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Water Sort",
    url: "https://cdn.timepass.games/games/21671d29-ad22-43e7-8458-607cf7559662/bf04d760-ce19-4201-a6df-59bf1decf3c9/",
    thumbnail: "https://cdn.timepass.games/images/e1fb83a1-8c3a-4a0c-8af4-c4df369386ae.webp",
    categories: ["All Games", "Puzzle"]
  },
  {
    name: "Bottle Flip",
    url: "https://cdn.timepass.games/games/94d599d8-6db4-4571-b45b-52f60eeb75b7/bcd1a29f-aa2c-4617-9575-711ee017f1e2/",
    thumbnail: "https://cdn.simpleviralgames.com/images/5dc287cf-c754-4c4e-bb6f-07b2ef88167c.webp",
    categories: ["Top 10 Games", "All Games", "Arcade"]
  },
  {
    name: "House Painter",
    url: "https://cdn.timepass.games/games/f5e3374b-8f87-4886-9e04-78986f738f7f/ae4b233c-4503-4d68-8039-798bcdbdb9d5/",
    thumbnail: "https://cdn.timepass.games/images/2ea91fe5-9b54-4d27-af0f-6586cb71dc75.webp",
    categories: ["All Games", "Easy to Play", "Puzzle"]
  },
  {
    name: "Wordplay",
    url: "https://cdn.timepass.games/games/c219bbd2-f21b-43aa-a873-3e619091296b/5cd0efc6-bfb6-4520-a6c8-e833a0b1139c/",
    thumbnail: "https://cdn.timepass.games/images/pcsyxfdvpy.webp",
    categories: ["All Games", "Easy to Play"]
  },
  {
    name: "Archery",
    url: "https://cdn.timepass.games/games/18afb0ff-5ea9-40fe-8c27-83a010d011fd/00c78c6f-8563-4b18-ad43-e39fb1e9e76a/",
    thumbnail: "https://cdn.timepass.games/images/2f9ea5d0-a8ea-4a37-81fc-9c90986759c6.webp",
    categories: ["All Games"]
  },
  {
    name: "Monster Destroyer",
    url: "https://cdn.timepass.games/games/c285d0da-08e0-48a8-a212-fb86d39af22a/ab83604a-544e-46cd-b4a1-17dd6498bf03/",
    thumbnail: "https://cdn.timepass.games/images/d9f27984-22be-494f-aec4-99f95acf09b6.webp",
    categories: ["All Games"]
  },
  {
    name: "Small Archer",
    url: "https://cdn.timepass.games/games/6650a506-2f5e-4040-b4c6-bd8658489564/34887794-3580-45bd-a938-8353d0edd889/",
    thumbnail: "https://cdn.timepass.games/images/87d1db02-194e-49f8-a773-fc49ad2d7b7f.webp",
    categories: ["All Games"]
  },
  {
    name: "Piggy Night",
    url: "https://cdn.timepass.games/games/366755e9-05d7-48e2-a926-5d6577772d3f/2a61e7a4-a516-4a60-ac81-44ae877767cf/",
    thumbnail: "https://cdn.simpleviralgames.com/images/459d5e9e-1385-449b-bf8a-3601e027c7ed.webp",
    categories: ["All Games"]
  },
  {
    name: "Milk For Cat",
    url: "https://cdn.timepass.games/games/6ebe7cf6-cfec-4853-af8e-f2dabfb485e4/ef2d4959-a3e0-462a-a560-9317703d77b7/",
    thumbnail: "https://cdn.timepass.games/images/9d29f79f-027f-46db-a7a4-f0712dbe6268.webp",
    categories: ["All Games"]
  },
  {
    name: "Pick it",
    url: "https://cdn.timepass.games/games/69f239ad-74ac-4518-b1df-6e4eb37a57a9/1d7ea5a8-8ff6-4d62-a3d6-a00a10ede072/",
    thumbnail: "https://cdn.simpleviralgames.com/images/843d66a7-0a97-49cf-8392-ac817ab88b92.webp",
    categories: ["All Games"]
  },
  {
    name: "Car Out",
    url: "https://cdn.timepass.games/games/1daf8d2c-f867-40ee-b72f-5c878a69bc7b/9ad8d834-cbce-479e-8e48-826c2db9b265/",
    thumbnail: "https://cdn.simpleviralgames.com/images/aee481ae-9494-4097-b8e5-6c0b67724113.webp",
    categories: ["All Games"]
  },
  {
    name: "2048",
    url: "https://cdn.timepass.games/games/5a273870-0424-49a5-b485-68e7e73a7504/6229f31e-d835-4856-ab33-4cef07f3be5b/",
    thumbnail: "https://cdn.timepass.games/images/d5914139-6ddb-4b6a-b198-ae4c49028530.webp",
    categories: ["Top 10 Games", "All Games", "Puzzle"]
  },
  {
    name: "Color Cannon",
    url: "https://cdn.timepass.games/games/4dcfd91b-3ff6-461b-b655-aab5013d05ef/1dd76b9f-1b48-4c2c-a948-c6d5156a32d7/",
    thumbnail: "https://cdn.timepass.games/images/jktkaqinoy.webp",
    categories: ["All Games", "Easy to Play"]
  },
  {
    name: "Space Shooter",
    url: "https://cdn.timepass.games/games/cfc03ecd-e59d-4b96-851c-984b2afc9cdd/b5530b1d-8811-49e8-8c62-a6e94408272b/",
    thumbnail: "https://cdn.timepass.games/images/00b6cfcd-e5ce-4c17-a489-4e4e86851b98.webp",
    categories: ["All Games"]
  },
  {
    name: "Hero Rescue",
    url: "https://cdn.timepass.games/games/b2586f6b-3e72-4e8d-ba03-90ba510ef2fa/52c75446-c4b3-473b-9a04-c9c760c4e2cb/",
    thumbnail: "https://cdn.simpleviralgames.com/images/5ba6a5c4-e09e-4732-879f-ef0259c71b8b.webp",
    categories: ["All Games"]
  },
  {
    name: "Make7",
    url: "https://cdn.timepass.games/games/4004da42-84ca-4fa6-8db9-e24a1a248031/6b75e397-26d1-4cac-8e71-174632c807de/",
    thumbnail: "https://cdn.timepass.games/images/932faa9d-df03-427d-ab87-29e38437f188.webp",
    categories: ["All Games"]
  },
  {
    name: "Pixel Brick Breaker",
    url: "https://cdn.timepass.games/games/197b2d64-9d1c-475f-8b7f-b06c55a54ed7/2d564def-b895-478d-aebc-ef89724bd260/",
    thumbnail: "https://cdn.timepass.games/images/b35ed56d-72bd-46fb-86b1-2b7cbfd05572.webp",
    categories: ["All Games"]
  },
  {
    name: "Blocky",
    url: "https://cdn.timepass.games/games/4477ab03-2d5c-48e0-a629-4e1ec0966493/166e3664-52c2-4879-b386-9df154803599/",
    thumbnail: "https://cdn.timepass.games/images/95d88209-f3ad-43d2-aa1c-9421b419058c.webp",
    categories: ["All Games"]
  },
  {
    name: "Image Quiz",
    url: "https://cdn.timepass.games/games/320437db-59f5-4f7a-ba61-714d2712dfb0/29ad9a7a-7fa3-4493-89ff-323329ed4f4b/",
    thumbnail: "https://cdn.timepass.games/images/c3b1807a-18a6-4d35-8999-1c47f7083012.webp",
    categories: ["All Games"]
  },
  {
    name: "Polygami",
    url: "https://cdn.timepass.games/games/aafe7145-7061-48ff-813b-a8bc5a6370b1/f4ef272e-8e8d-43ba-aabc-1b8dbeeabb7b/",
    thumbnail: "https://cdn.timepass.games/images/6a8af6d6-9e99-4fab-b647-d5ee0a927171.webp",
    categories: ["All Games"]
  },
  {
    name: "Pop Us 3D",
    url: "https://cdn.timepass.games/games/ef6644b1-f9ba-4fe5-ae33-05b26b8b7671/e3adf6e5-09fb-4068-ada3-3d65f3cd0e1f/",
    thumbnail: "https://cdn.timepass.games/images/d4a21b20-7b5a-4e2e-b342-cbedede6a63b.webp",
    categories: ["All Games"]
  },
  {
    name: "Stack It",
    url: "https://cdn.timepass.games/games/553d8d1c-2679-4903-9923-90eb0593f195/6493c988-fc99-4204-9c5b-39c3308fc07b/",
    thumbnail: "https://cdn.simpleviralgames.com/images/bf3ab094-42e4-459a-b6df-632450a24967.webp",
    categories: ["All Games"]
  },
  {
    name: "Santa Chase",
    url: "https://cdn.timepass.games/games/b69648bb-3433-403d-8ef7-0486b77cbab3/eaf0988d-ff31-4a4f-a823-da6190ef044c/",
    thumbnail: "https://cdn.timepass.games/images/ea4395b2-a95b-4833-beec-342944c707ae.webp",
    categories: ["All Games"]
  },
  {
    name: "Word Swipe",
    url: "https://cdn.timepass.games/games/22ba6a71-ab9b-422d-92d5-d3b072f65a02/c687dc73-6b29-4b55-8814-d385e442de49/",
    thumbnail: "https://cdn.timepass.games/images/03c0db20-09b3-4afb-b04b-f4f7dfd7a56f.webp",
    categories: ["All Games"]
  },
  {
    name: "Equalz",
    url: "https://cdn.timepass.games/games/61ad6692-d27f-4523-af01-a7096d3700ca/2b006d9b-468e-4e95-ae32-5fe060bf560a/",
    thumbnail: "https://cdn.timepass.games/images/47eb20ce-ec3c-44e1-ae2e-e0ab5a45b122.webp",
    categories: ["All Games"]
  },
  {
    name: "Dunk Line",
    url: "https://cdn.timepass.games/games/7307a063-9d51-498c-a474-3a7bd64aa283/c1849f41-a1ae-4163-867b-0e67339b7906/",
    thumbnail: "https://cdn.timepass.games/images/6e2559e0-f754-461b-8afb-4f3e642f52a4.webp",
    categories: ["All Games"]
  },
  {
    name: "Number Snakes",
    url: "https://cdn.timepass.games/games/ea366b72-9ad8-4a21-b3d2-5ed1f661dc2b/fcad3676-4e8a-45e8-a34e-a8659e2202c3/",
    thumbnail: "https://cdn.simpleviralgames.com/images/7c8ecb78-2f57-413d-b503-d5a6e8f4b05f.webp",
    categories: ["All Games"]
  },
  {
    name: "Disk Rush",
    url: "https://cdn.timepass.games/games/7dd6c79c-b79a-4aa4-a82c-6e75b4ec384c/ec8d5b88-6330-413e-9ca3-d520f56f42b5/",
    thumbnail: "https://cdn.simpleviralgames.com/images/35e019ac-1adc-4c51-a4b4-32f771ece7fb.webp",
    categories: ["All Games"]
  },
  {
    name: "Colored-Bricks",
    url: "https://cdn.timepass.games/games/804839f6-f1cd-425b-b756-93250d632f92/1368cb84-e0d3-47a7-aa93-f55ea0f21396/",
    thumbnail: "https://cdn.timepass.games/images/bad0a369-9426-485d-81ab-b17932594bba.webp",
    categories: ["All Games"]
  },
  {
    name: "Rope Bawling 2",
    url: "https://cdn.timepass.games/games/1284e66e-969a-4785-8c1b-e2a97a48cc69/d2addc98-a5d5-4396-b396-349eeb7fedbe/",
    thumbnail: "https://cdn.timepass.games/images/c2b4babf-fd73-4a50-8765-32a222d790d7.webp",
    categories: ["All Games"]
  },
  {
    name: "Secret Agent",
    url: "https://cdn.timepass.games/games/90706087-641a-4a0c-81a3-929abfaa29e8/e515f325-0a29-4d7f-a0e7-abdfa52a180f/",
    thumbnail: "https://cdn.timepass.games/images/e82ce859-214b-4465-9545-f8649e880dcc.webp",
    categories: ["All Games"]
  },
  {
    name: "Fruitmas",
    url: "https://cdn.timepass.games/games/ad31a560-5645-414e-9a5b-d64c47e13d51/5ef334ad-8ad4-4e60-887e-ea7435eb0a23/",
    thumbnail: "https://cdn.simpleviralgames.com/images/fe7a2d45-6e30-45a1-9987-3c6b6d6784f8.webp",
    categories: ["All Games"]
  },
  {
    name: "Blastify",
    url: "https://cdn.timepass.games/games/278ce9c0-2caf-42ab-b4cb-92701ebe2e51/32c230bf-dd7b-40b8-92b2-69ee3e1b7925/",
    thumbnail: "https://cdn.timepass.games/images/1434aa1c-0568-49dc-847f-5987df36b397.webp",
    categories: ["All Games"]
  },
  {
    name: "Xmas Tiles",
    url: "https://cdn.timepass.games/games/e0706fd9-06f4-4a29-96b7-e8fba0574cd5/0bc7b5de-fe58-4a4f-8a6a-3029bf27efe4/",
    thumbnail: "https://cdn.timepass.games/images/ad59751d-51cd-48df-83b6-d0beb4135b5a.webp",
    categories: ["All Games"]
  },
  {
    name: "Pixel Match",
    url: "https://cdn.timepass.games/games/8ba2dbb3-d984-4cfb-b3ab-c539222eb51b/bb835f37-fc8a-461c-9e92-fb7b66811bac/",
    thumbnail: "https://cdn.timepass.games/images/3b3d6c57-ffbe-4b60-ad5c-84aff9c5273a.webp",
    categories: ["All Games"]
  },
  {
    name: "Route Digger 2",
    url: "https://cdn.timepass.games/games/cb789313-4654-4e5f-9b78-4f3e057d8d70/c31794be-a088-4609-8d3e-16547e730763/",
    thumbnail: "https://cdn.timepass.games/images/11420901-972e-412b-8fd2-2763851b5e11.webp",
    categories: ["All Games"]
  },
  {
    name: "Route Digger",
    url: "https://cdn.timepass.games/games/4c5dd099-70a3-48ca-a51a-6d23c3b8f932/fc25e5ea-222b-4d06-bfb1-57116848e2f8/",
    thumbnail: "https://cdn.timepass.games/images/796bbe1c-50ca-474d-993a-9a375763866a.webp",
    categories: ["All Games"]
  },
  {
    name: "Kick Color",
    url: "https://cdn.timepass.games/games/2275a9f7-b20a-4c3e-98c7-ac8ac9c68e22/b9c6b488-6aa3-4193-af80-096b5cccf607/",
    thumbnail: "https://cdn.timepass.games/images/cbd0685d-af3f-4066-8e54-710798bc4e9d.webp",
    categories: ["All Games"]
  },
  {
    name: "Kids Alphabet",
    url: "https://cdn.timepass.games/games/51b11c11-cb32-4959-9364-2d65dad22ab5/3da3c9c3-208c-4cbc-92fa-6141136500cf/",
    thumbnail: "https://cdn.timepass.games/images/96f67d45-4b44-4e50-80f3-1412330a7265.webp",
    categories: ["All Games"]
  },
  {
    name: "Stacky Clown",
    url: "https://cdn.timepass.games/games/9377c675-85e2-4b2c-982f-3da8cef589eb/28640e84-9d03-40bd-80de-e95c179f4413/",
    thumbnail: "https://cdn.timepass.games/images/746b866e-7924-42a6-b5b9-99cd516774b4.webp",
    categories: ["All Games"]
  },
  {
    name: "Free Birds",
    url: "https://cdn.timepass.games/games/789f8d0e-98fb-4696-8edc-7827d36fbc01/e0267002-e0da-45ba-8882-dfa8c5783d98/",
    thumbnail: "https://cdn.simpleviralgames.com/images/87bf71bf-9ad1-40a9-85ed-96c65891798e.webp",
    categories: ["All Games"]
  },
  {
    name: "Bottle Flip Raphael",
    url: "https://cdn.timepass.games/games/f3a81e14-48fb-4118-b71a-dc751c55459b/0b9d110f-f9b6-4042-a423-0661294e9bb3/",
    thumbnail: "https://cdn.simpleviralgames.com/images/c68f7900-a27f-45a4-9f66-43204d3b2bb8.webp",
    categories: ["All Games"]
  },
  {
    name: "Shri Mandir",
    url: "https://cdn.timepass.games/games/d5631888-2337-4c48-aeec-8115f0dd606b/db04d83d-a2d3-4212-997b-e772e5f751d8/",
    thumbnail: "https://cdn.timepass.games/images/5b0269f7-90fb-4739-8d5f-3a1c48fd3f70.webp",
    categories: ["All Games"]
  },
  {
    name: "Happy Filled Glass 4",
    url: "https://cdn.timepass.games/games/444c8786-0fd1-43f0-b0d4-def2d494c4d1/37bbee6c-fd13-4cd4-98c6-05126249b65d/",
    thumbnail: "https://cdn.timepass.games/images/750b925c-2dbc-4c63-8173-e999c0800327.webp",
    categories: ["All Games"]
  },
  {
    name: "Basketball Challenge",
    url: "https://cdn.timepass.games/games/3bbda3a6-a052-4c1f-b9f2-e7c0275366b3/aab5ad54-c2e2-482b-b18c-ae32a5afd00c/",
    thumbnail: "https://cdn.simpleviralgames.com/images/4898c13a-9d77-49d2-9b9f-59dfacb6615a.webp",
    categories: ["All Games"]
  },
  {
    name: "Targets Attack",
    url: "https://cdn.timepass.games/games/4bef8f3e-f9a8-46d6-877b-fbeaaa9f61fc/abb8dbd4-d39b-4f54-b8b9-732468a40f1d/",
    thumbnail: "https://cdn.timepass.games/images/14447468-7287-40d4-af05-55cc86975399.webp",
    categories: ["All Games"]
  },
  {
    name: "Circle Platform",
    url: "https://cdn.timepass.games/games/22f98a72-0654-455c-8c5d-7614d0e53bdd/56148b6b-bbef-4639-a682-f930c27ae150/",
    thumbnail: "https://cdn.timepass.games/images/94f4651c-e8a4-415e-bf0c-f1b0bda5b7d8.webp",
    categories: ["All Games"]
  },
  {
    name: "Word Clues",
    url: "https://cdn.timepass.games/games/25ddd110-8c7b-452e-a13f-9359585c8cc4/47dc9e35-3c8b-4cc4-8402-d40b918f3f7a/",
    thumbnail: "https://cdn.simpleviralgames.com/images/5a6235dc-2b54-4deb-aa47-2e9412b271cb.webp",
    categories: ["All Games"]
  },
  {
    name: "Popcorn Eater",
    url: "https://cdn.timepass.games/games/e05e6983-3254-4457-a900-240e795fa8dd/7e2c126b-d377-42b0-b79a-e78379919657/",
    thumbnail: "https://cdn.timepass.games/images/c3614255-0ae6-4b9f-8be7-b18c4d6ccf00.webp",
    categories: ["All Games"]
  },
  {
    name: "Colour Strings",
    url: "https://cdn.timepass.games/games/1559e623-d0e4-441d-a8f1-7e89e9175528/c244a21e-8966-451c-8e48-f0d9e56b1e2a/",
    thumbnail: "https://cdn.simpleviralgames.com/images/c9bc39db-da65-4895-9683-eea90121f203.webp",
    categories: ["All Games"]
  },
  {
    name: "Maze Control",
    url: "https://cdn.timepass.games/games/1094a975-1b24-4b24-ab4f-19a0e0f57688/9d7bca7b-4c1c-4faf-8ca3-786ca5832de6/",
    thumbnail: "https://cdn.timepass.games/images/2f66a800-0583-4839-b9f6-adf9c26ab71a.webp",
    categories: ["All Games"]
  },
  {
    name: "Bridge Down",
    url: "https://cdn.timepass.games/games/24027352-3930-4676-b828-8c21a785a833/7ebb8caf-6591-48f9-8196-1095e04ec8f0/",
    thumbnail: "https://cdn.timepass.games/images/8f68fc18-e20b-4022-9983-90a08113cccf.webp",
    categories: ["All Games"]
  },
  {
    name: "Cut for cat",
    url: "https://cdn.timepass.games/games/ac3fb617-8642-4d9a-857e-a02a50cc1e35/e25dbdcf-3325-4cd6-9b8c-f88567d8bf8b/",
    thumbnail: "https://cdn.timepass.games/images/0339fbd1-3116-45fd-b244-b445c7b70c6d.webp",
    categories: ["All Games"]
  },
  {
    name: "Liquid Orange",
    url: "https://cdn.timepass.games/games/e7e02173-2246-47c3-9361-c6ca26fec38b/2acf4558-e767-4eeb-b64e-0bb5018c85e4/",
    thumbnail: "https://cdn.timepass.games/images/de05b860-6805-4fe6-b9e8-c24221b1f527.webp",
    categories: ["All Games"]
  },
  {
    name: "Fruit King",
    url: "https://cdn.timepass.games/games/d53b092d-5b8f-4bc4-a667-7795e1046bae/4f068a30-f734-4926-b70f-2987a7b80352/",
    thumbnail: "https://cdn.timepass.games/images/2f94aa39-d150-4b5b-aea4-feb8cc6b96c0.webp",
    categories: ["All Games"]
  },
  {
    name: "Out Of Lava",
    url: "https://cdn.timepass.games/games/6767959c-14d0-41a6-8afb-47b652ab29df/a49103ba-b394-4a41-beda-dc1db0ff2e63/",
    thumbnail: "https://cdn.timepass.games/images/fcb96949-041f-4089-b3ca-06751d6838f0.webp",
    categories: ["All Games"]
  },
  {
    name: "Plus Puzzle",
    url: "https://cdn.timepass.games/games/1a8f690e-9da8-48dc-a58d-e611416ad41e/39df00bf-f18d-4726-b7a7-21fe01b571ff/",
    thumbnail: "https://cdn.timepass.games/images/6ee0a27f-3273-4857-a702-35fc65dbcdeb.webp",
    categories: ["All Games"]
  },
  {
    name: "Air Hockey Neon",
    url: "https://cdn.timepass.games/games/3f29ae7d-076f-4c3b-92cd-344a51580c6f/a542a75e-acf2-4679-ab51-d3d94440d970/",
    thumbnail: "https://cdn.timepass.games/images/1bdfabbd-e6f5-4166-b68c-1b321a81569f.webp",
    categories: ["All Games"]
  },
  {
    name: "Cards 2048",
    url: "https://cdn.timepass.games/games/5cff33ec-df09-4ceb-ac5f-3dec8d116fec/0ea31412-41c2-4b62-8ed8-11920738dec3/",
    thumbnail: "https://cdn.timepass.games/images/324d625e-435d-4d9a-bb9d-4874eb453f64.webp",
    categories: ["All Games"]
  },
  {
    name: "Hexa Dice",
    url: "https://cdn.timepass.games/games/8031da35-b9a3-4d06-af94-1bc91c600831/95b0fa20-f3bc-455d-b8e5-6b25687d977a/",
    thumbnail: "https://cdn.timepass.games/images/02f54d30-b87e-43c5-86d7-0a65cebf0abb.webp",
    categories: ["All Games"]
  },
  {
    name: "Dotted Fill",
    url: "https://cdn.timepass.games/games/9e50a356-f4a1-443b-acdd-1c9bcf55fc0b/f0337d62-7158-49c9-98b2-d4cc48ac9749/",
    thumbnail: "https://cdn.timepass.games/images/8f561ad8-6568-4227-abe4-ca2d14b5e2b4.webp",
    categories: ["All Games"]
  },
  {
    name: "Wooden Slide",
    url: "https://cdn.timepass.games/games/75bb24b5-e450-46a1-a9f6-df298ec7e176/5e769441-3fb9-4f01-bbb5-369c4fd32916/",
    thumbnail: "https://cdn.timepass.games/images/1a7f5b0a-3781-4ad1-9ad0-fb92759fdde1.webp",
    categories: ["All Games"]
  },
  {
    name: "Tetris Hint",
    url: "https://cdn.timepass.games/games/abec1cbb-ba28-463e-bdbd-673b81784030/3d5d40c9-743d-481b-914e-0481b1e542a4/",
    thumbnail: "https://cdn.timepass.games/images/232c8ce1-242d-4bd5-abac-671a58d6dcd1.webp",
    categories: ["All Games"]
  },
  {
    name: "Color Panic",
    url: "https://cdn.timepass.games/games/ffe9a108-28e1-4f4d-9445-545ff1df28f8/678ed91f-88c4-4931-a195-1dd63a961679/",
    thumbnail: "https://cdn.timepass.games/images/d761e3fe-3037-405f-a7f5-32bee34c4b31.webp",
    categories: ["All Games"]
  },
  {
    name: "Bubbo Bubbo",
    url: "https://cdn.timepass.games/games/27991f74-47fa-421c-be1c-7a9902d6bbf9/7783c354-c818-4038-9073-8750e523c2b9/",
    thumbnail: "https://cdn.timepass.games/images/6e7e9cac-70e4-4a14-8e60-40504649f2b9.webp",
    categories: ["All Games"]
  },
  {
    name: "Puzzling Portion",
    url: "https://cdn.timepass.games/games/beb63810-d8b8-4bd8-94a1-939d23615e13/b332d558-e427-4e13-86e9-ec77e0fcc4c6/",
    thumbnail: "https://cdn.timepass.games/images/f78381c9-90e4-4607-bd76-1c53c66d5262.webp",
    categories: ["All Games"]
  },
  {
    name: "Cut Grass",
    url: "https://cdn.timepass.games/games/b13b5b99-bb86-45a7-90dd-d1f295ea5ce3/a0d29cca-f17b-419d-8af1-68e3d7847231/",
    thumbnail: "https://cdn.simpleviralgames.com/images/faf02da7-c08d-4786-adcf-79ebbc11e31c.webp",
    categories: ["All Games"]
  },
  {
    name: "Collect Em All",
    url: "https://cdn.timepass.games/games/a1eb5582-dc55-4664-8d14-75a18d42b8bb/9e5d3fca-0fac-4f52-9779-d495aeb6ec8a/",
    thumbnail: "https://cdn.timepass.games/images/cf676b01-fea9-4471-9de6-975944a22181.webp",
    categories: ["All Games"]
  },
  {
    name: "Pinball Master",
    url: "https://cdn.timepass.games/games/909bfd28-979a-4903-b96b-454ddaf1c6fd/c62b91ef-c71a-4490-8bdd-ddf73c26552a/",
    thumbnail: "https://cdn.timepass.games/images/328c4a81-83c6-416e-9869-e96028ec3bb7.webp",
    categories: ["All Games"]
  },
  {
    name: "Monster Rush",
    url: "https://cdn.timepass.games/games/d2ea6b6b-54bf-45c8-8937-be7d8e467f8c/a60d6cc7-6bbd-4dc3-89ca-e437deabcc1e/",
    thumbnail: "https://cdn.timepass.games/images/075d35b0-d70c-487a-b340-94b66bf02838.webp",
    categories: ["All Games"]
  },
  {
    name: "Box Size",
    url: "https://cdn.timepass.games/games/a17c7ac2-86e7-4fc3-9644-e843ed7234be/e03a26a1-feb0-4d3e-b510-ce32a4b9a5ce/",
    thumbnail: "https://cdn.timepass.games/images/adcdd088-07cc-4b54-8c29-8e7ad8864de0.webp",
    categories: ["All Games"]
  },
  {
    name: "Balloons Creator",
    url: "https://cdn.timepass.games/games/126b9a73-b691-4979-a44d-5ee43549840c/82226247-3213-401f-8be5-c15a47b5e819/",
    thumbnail: "https://cdn.timepass.games/images/d73e9595-6a55-4c77-bde4-ab898973ba6d.webp",
    categories: ["All Games"]
  },
  {
    name: "Bubble Pet Saga",
    url: "https://cdn.timepass.games/games/5f8c03e6-24e9-4ef7-adb9-4f1997561873/86f779ef-b589-4618-9550-0c4b4c139ce1/",
    thumbnail: "https://cdn.timepass.games/images/c901a06d-0e85-4640-b7f2-896439514e99.webp",
    categories: ["All Games"]
  },
  {
    name: "Boat Rush",
    url: "https://cdn.timepass.games/games/ea662b93-f359-45bb-b31d-ef7ea8e68ae6/2de2e318-c3df-440b-bd40-ddaa6330b138/",
    thumbnail: "https://cdn.timepass.games/images/5e3c21f7-171e-4606-9f2b-8aec2b84827d.webp",
    categories: ["All Games"]
  },
  {
    name: "Helix Jump",
    url: "https://cdn.timepass.games/games/48749ba2-e270-4aa7-833f-29f485919176/02ec686a-849b-4a04-9615-3d70eaceda4d/",
    thumbnail: "https://cdn.simpleviralgames.com/images/4e2ba028-d75f-4f90-bb7a-09aaa9ec738e.webp",
    categories: ["All Games"]
  },
  {
    name: "2048 Balls",
    url: "https://cdn.timepass.games/games/d92fd9d6-c77d-49f9-aa8d-1c10be9ebd22/970ea8d8-7d63-42c1-a1d9-67e8e4042355/",
    thumbnail: "https://cdn.timepass.games/images/5aa946e8-fea7-4663-9e55-3084506bbb57.webp",
    categories: ["All Games"]
  },
  {
    name: "Cannon Blast",
    url: "https://cdn.timepass.games/games/beb78314-9be2-4b83-9756-cd81d22786dc/9f3bbce3-501c-42d7-bcac-18a9364dd659/",
    thumbnail: "https://cdn.simpleviralgames.com/images/2c9c0995-08c2-4500-ba50-a5ef47f6cd77.webp",
    categories: ["All Games"]
  },
  {
    name: "Rise Up",
    url: "https://cdn.timepass.games/games/4efb66dd-e707-4296-90ee-e458f627b91c/c4297830-34e9-43d0-9c0f-718bbdc7d85d/",
    thumbnail: "https://cdn.timepass.games/images/e9fa3997-8035-4166-a952-ae695ad073fd.webp",
    categories: ["All Games"]
  },
  {
    name: "Colour Switch",
    url: "https://cdn.timepass.games/games/d26947c5-84be-44f3-9fcc-427e0c591162/2655f5e0-3220-485d-bdf2-e957ff93d622/",
    thumbnail: "https://cdn.simpleviralgames.com/images/7e090c5c-732a-42a5-a0d2-c6d501dd3d89.webp",
    categories: ["All Games"]
  },
  {
    name: "Colour Road",
    url: "https://cdn.timepass.games/games/aea31b26-5ea8-469e-ba97-0b0ad7e0cd77/b54faac1-cb2d-4a93-afc2-37f48c972228/",
    thumbnail: "https://cdn.simpleviralgames.com/images/f62dd468-9468-4990-b8d7-adc5b5a18ed0.webp",
    categories: ["All Games"]
  },
  {
    name: "Dunk Hit",
    url: "https://cdn.timepass.games/games/492fb1e0-c5cb-4388-b1c9-29ae175f6cc8/4d5a1049-65fb-4bd2-9e02-50193b0b9817/",
    thumbnail: "https://cdn.simpleviralgames.com/images/c032302b-3038-4c36-838b-1f0329bc5a66.webp",
    categories: ["All Games"]
  },
  {
    name: "Stack Bounce",
    url: "https://cdn.timepass.games/games/3dcad130-68d8-463d-a3a9-17820ebbe5b8/3964f81e-5963-4909-807b-b2b694a33285/",
    thumbnail: "https://cdn.timepass.games/images/38d12c9c-1e21-475b-a042-a123b1171c74.webp",
    categories: ["All Games"]
  },
  {
    name: "Nuts and Bolts",
    url: "https://cdn.timepass.games/games/6c48e70c-d53a-4dd0-8d72-301a5f36bf08/a7c48c6d-dc39-47f2-81bc-06a9686ff318/",
    thumbnail: "https://cdn.timepass.games/images/bd27f657-48d9-46d5-8067-4b08077f18ed.webp",
    categories: ["All Games"]
  },
  {
    name: "Carrot Run",
    url: "https://cdn.timepass.games/games/36d600ff-3a6b-4dfa-b5d7-58e9caef49f7/e71772b9-61f1-47c0-8a48-fe4aad587419/",
    thumbnail: "https://cdn.simpleviralgames.com/images/c5df243e-f1b2-449c-bd2c-4c93e2aefe0a.webp",
    categories: ["All Games"]
  },
  {
    name: "Ultimate Sudoku",
    url: "https://cdn.timepass.games/games/cca24660-7202-44fe-b28a-e69afed29d7d/536387f2-ba6a-4dee-88b9-b689c3207454/",
    thumbnail: "https://cdn.timepass.games/images/c1dea4f8-3ab3-48e2-bde3-1e0f0143e702.webp",
    categories: ["All Games"]
  },
  {
    name: "Knots",
    url: "https://cdn.timepass.games/games/d61ced73-4631-43fa-9ba6-6971e4240e8b/685ff032-84ad-4c79-8d79-c720f27b85dd/",
    thumbnail: "https://cdn.timepass.games/images/eb14a538-5a4d-4be9-83a2-26732e1d4d2b.webp",
    categories: ["All Games"]
  },
  {
    name: "Slices",
    url: "https://cdn.timepass.games/games/b6842665-89a3-45b3-9648-a3c0e237efba/ff60f474-02c1-463b-9885-0a9e68120a64/",
    thumbnail: "https://cdn.timepass.games/images/be347f0f-19bd-42d1-bfda-2c7e9387266c.webp",
    categories: ["All Games"]
  },
  {
    name: "Zero 21",
    url: "https://cdn.timepass.games/games/255bc58e-96e9-4169-9a00-ecdf1b8782bb/047ec303-971d-43d5-bad8-3b81955926f8/",
    thumbnail: "https://cdn.simpleviralgames.com/images/c5392808-4720-459f-a39c-eafd98e88825.webp",
    categories: ["All Games"]
  },
  {
    name: "Swipe Cubes",
    url: "https://cdn.timepass.games/games/54059053-48bb-472b-9ab1-0f34d79bdb8f/a6926bb8-0450-4a3f-9cda-67403d2c7be6/",
    thumbnail: "https://cdn.timepass.games/images/e0a90418-37ff-415d-b148-4e910ed2ec62.webp",
    categories: ["All Games"]
  }
];

// Render games
function renderGames(category = 'all') {
  const container = document.getElementById('games-container');
  container.innerHTML = '';

  const filteredGames = category === 'all' 
    ? gamesData 
    : gamesData.filter(game => game.categories.includes(category));

  filteredGames.forEach(game => {
    const a = document.createElement('a');
    a.href = '#';
    a.dataset.gameUrl = game.url;
    a.classList.add('softwareIconGameLink');

    const img = document.createElement('img');
    img.src = game.thumbnail;
    img.alt = game.name;
    img.classList.add('softwareIconGame');

    a.appendChild(img);
    container.appendChild(a);
  });
}

// Filter buttons
document.addEventListener('DOMContentLoaded', () => {
  renderGames();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderGames(this.dataset.category);
    });
  });

  // Open game in iframe
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.softwareIconGameLink');
    if (link) {
      e.preventDefault();
      const gameUrl = link.dataset.gameUrl;
      document.getElementById('game-iframe').src = gameUrl;
      document.getElementById('game-overlay').style.display = 'flex';
      const bgSound = document.querySelector('audio');
      if (bgSound) bgSound.pause();
    }
  });

  // Close game overlay
  document.getElementById('close-game')?.addEventListener('click', () => {
    document.getElementById('game-overlay').style.display = 'none';
    document.getElementById('game-iframe').src = '';
  });

  // Hamburger menu
  document.querySelector('.hamburger')?.addEventListener('click', function() {
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active');
      document.querySelector('.subMenu').style.display = 'none';
    } else {
      this.classList.add('is-active');
      document.querySelector('.subMenu').style.display = 'flex';
    }
  });

  // Collapse submenu on choose
  document.querySelectorAll('.navEach').forEach(each => {
    each.addEventListener('click', function() {
      if (document.querySelector('.subMenu')?.style.display === 'flex') {
        document.querySelector('.subMenu').style.display = 'none';
        document.querySelector('.hamburger')?.classList.remove('is-active');
      }
    });
  });
});
