/**
 * i18n: path-based locale
 * - / or /<base>/ = English
 * - /ar or /<base>/ar = Arabic (RTL)
 * Set <meta name="app-base-path" content="/your-subpath"> if deployed under a subpath.
 */
(function () {
  const pathname = window.location.pathname;

  // Allow backend to set base path explicitly (e.g. when behind reverse proxy or subpath)
  let appBasePath = '';
  const meta = document.querySelector('meta[name="app-base-path"]');
  if (meta && meta.getAttribute('content')) {
    appBasePath = meta.getAttribute('content').replace(/\/$/, '');
  } else {
    // Auto-detect: if path contains /ar, base is everything before /ar
    const arMatch = pathname.match(/^(.*)\/ar(\/|$)/);
    if (arMatch) {
      appBasePath = arMatch[1] || '';
    } else if (pathname !== '/' && pathname !== '') {
      // English page at e.g. /portal/index.html -> base = /portal
      appBasePath = pathname.replace(/\/$/, '').replace(/\/[^/]*$/, '');
    }
  }

  const pathAfterBase = appBasePath ? pathname.slice(appBasePath.length) || '/' : pathname;
  const isAr = pathAfterBase === '/ar' || pathAfterBase.startsWith('/ar/');
  const locale = isAr ? 'ar' : 'en';
  const localePrefix = isAr ? appBasePath + '/ar' : appBasePath;

  window.getLocale = function () { return locale; };
  window.isRTL = function () { return isAr; };
  window.getBasePath = function () { return appBasePath; };
  window.getLocalePrefix = function () { return localePrefix; };

  const strings = locale === 'ar' ? (window.I18N_AR || {}) : (window.I18N_EN || {});
  window.t = function (key) {
    const val = strings[key];
    return val !== undefined ? val : key;
  };

  function setDocumentDirection() {
    document.documentElement.lang = locale === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', isAr);
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = window.t(key);
      if (el.getAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      if (!el.getAttribute('data-i18n')) {
        const key = el.getAttribute('data-i18n-html');
        el.innerHTML = window.t(key);
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = window.t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.title = window.t(el.getAttribute('data-i18n-title'));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.alt = window.t(el.getAttribute('data-i18n-alt'));
    });
  }

  function fixInternalLinks() {
    if (!isAr) return;
    var arRoot = appBasePath + '/ar';
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      if (href.startsWith('http') || href.startsWith('mailto:')) return;
      // Logo / hash links: in Arabic, point to Arabic home so tab switch keeps /ar
      if (href.startsWith('#')) {
        if (a.classList.contains('logo') || (a.getAttribute('aria-label') && a.getAttribute('aria-label').indexOf('logo') !== -1)) {
          a.setAttribute('href', arRoot + href);
        }
        return;
      }
      if (href.indexOf(arRoot) === 0) return;
      var path = href.startsWith('/') ? href : ('/' + href.replace(/^\.\//, ''));
      if (path.indexOf('/ar') !== -1) return;
      // Path-only URLs so Home/More Games/My Account/T&C stay under /ar
      var targetPath = (path === '/' || path === '/index.html') ? arRoot : (arRoot + path);
      a.setAttribute('href', targetPath);
    });
  }

  function fixFormLinks() {
    if (!isAr) return;
    var arRoot = appBasePath + '/ar';
    document.querySelectorAll('form').forEach(function (form) {
      var action = form.getAttribute('action');
      if (action && !action.startsWith('http') && action.indexOf('/ar') === -1) {
        form.setAttribute('action', arRoot + (action.startsWith('/') ? action : '/' + action));
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setDocumentDirection();
      applyI18n();
      fixInternalLinks();
      fixFormLinks();
      if (typeof window.onI18nReady === 'function') window.onI18nReady();
    });
  } else {
    setDocumentDirection();
    applyI18n();
    fixInternalLinks();
    fixFormLinks();
    if (typeof window.onI18nReady === 'function') window.onI18nReady();
  }
})();
