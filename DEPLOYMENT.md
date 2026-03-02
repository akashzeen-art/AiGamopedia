# AIGamopedia – Deployment Guide (Backend Team)

## Overview

- **Stack:** Node.js + Express (static site with i18n).
- **Languages:** English (root) and Arabic (RTL) at `/ar`.
- **Port:** Configurable via `PORT` env var; default `5500`.

---

## 1. Run locally / on server

```bash
# Install dependencies (once)
npm install

# Start server (default port 5500)
npm start
```

**With custom port:**

```bash
PORT=8080 npm start
```

- **English:** `http://<host>:<PORT>/`
- **Arabic:** `http://<host>:<PORT>/ar`

Server binds to `0.0.0.0` so it’s reachable from other machines/containers.

---

## 2. Deploy on Netlify

The repo includes **`_redirects`** and **`netlify.toml`** so `/ar` works on Netlify (no 404).

- **Publish directory:** `.` (root; no build step).
- **Redirects:** `/ar` and `/ar/*` are rewritten to the right HTML or static file (URL stays `/ar`).
- After deploy, **English** = `https://your-site.netlify.app/`, **Arabic** = `https://your-site.netlify.app/ar`.

No extra Netlify config needed; just connect the repo and deploy.

---

## 3. Deploy on Vercel

The repo includes **`vercel.json`** so `/ar` (Arabic) works on Vercel (no 404).

1. **Import the project** at [vercel.com/new](https://vercel.com/new): connect your Git repo (e.g. GitHub `akashzeen-art/AiGamopedia`).
2. **Fix "Not Found":** In **Project Settings → General → Build & Development Settings** set:
   - **Framework Preset:** `Other` (so Vercel does not treat it as a Node server).
   - **Build Command:** leave empty, or keep the override from `vercel.json` (`echo 'Static site'`).
   - **Output Directory:** `.` (dot) so the repo root is served as static files.
3. **Redeploy** (Deployments → … → Redeploy). Then:
   - **English:** `https://your-project.vercel.app/`
   - **Arabic:** `https://your-project.vercel.app/ar`

The `vercel.json` rewrites send `/ar` and `/ar/*` to the correct HTML or static files so the URL stays `/ar`.

---

## 4. Routes your backend must support

If you **don’t** use this Node server and instead serve the built files (e.g. from Nginx/Apache/CDN), replicate this behaviour:

| Request path | Behaviour |
|-------------|-----------|
| `/` | Serve `index.html` |
| `/index.html` | Serve `index.html` |
| `/ar` | Serve `index.html` (same file; locale is decided by JS from path) |
| `/ar/` | Serve `index.html` |
| `/ar/index.html` | Serve `index.html` |
| `/ar/moreGames.html` | Serve `moreGames.html` |
| `/ar/myAccount.html` | Serve `myAccount.html` |
| `/ar/termsAndConditions.html` | Serve `termsAndConditions.html` |
| `/ar/<any file>` (e.g. `/ar/index.js`, `/ar/style.css`, `/ar/images/...`) | Serve the same file from project root (e.g. `index.js`, `style.css`, `images/...`) |
| All other static files at root | Serve normally (e.g. `index.js`, `style.css`, `images/`, `i18n/`, etc.) |

So: **under `/ar`, map “virtual” paths to the same physical files as at root** (only the HTML routes above are special; the rest are static files).

---

## 5. File layout to deploy

Deploy the whole project **except** `node_modules` (and any `.env` if you add it). Backend only needs to run `npm install` and `npm start` if using the Node server.

**Required files/folders:**

- `server.js` – Express app
- `package.json` + `package-lock.json`
- `index.html`, `moreGames.html`, `myAccount.html`, `termsAndConditions.html`
- `index.js`, `moreGames.js`, `i18n.js`
- `i18n/` (en.js, ar.js)
- `style.css`
- `images/`, `icons/`, `audios/` (and any other assets)
- `image.png`, `manifest.webmanifest`
- **Netlify:** `_redirects`, `netlify.toml`. **Vercel:** `vercel.json`.
- Optional: `DEPLOYMENT.md`, `README.md`, `.gitignore`

---

## 6. Environment variables

| Variable     | Required | Default | Description |
|-------------|----------|---------|-------------|
| `PORT`      | No       | `5500`  | HTTP port the server listens on. |
| `BASE_PATH` | No       | (none)  | If the app is served under a subpath (e.g. `https://example.com/portal/`), set `BASE_PATH=/portal`. |

Examples:

```bash
export PORT=8080
npm start
```

```bash
# App available at https://example.com/portal/ and https://example.com/portal/ar
export BASE_PATH=/portal
export PORT=8080
npm start
```

---

## 7. If /ar is not working

**Common causes:**

1. **Reverse proxy stripping or rewriting the path**  
   The proxy must forward the full path (including `/ar` and `/ar/...`) to the Node app. Do **not** use a trailing slash on `proxy_pass` if it would strip the path.

2. **App deployed under a subpath**  
   If the app is at `https://example.com/portal/`, the backend must set `BASE_PATH=/portal` and add the base path meta tag in HTML (see below).

3. **Not using the Node server**  
   If you serve only static files (no Node), the server must still return `index.html` for `/ar` and `/ar/*` (see section 2). Otherwise `/ar` will 404.

**Nginx (correct – full path forwarded):**

```nginx
location / {
    proxy_pass http://127.0.0.1:5500;   # no trailing slash
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

**Nginx (wrong – do not do this):**

```nginx
location / {
    proxy_pass http://127.0.0.1:5500/;  # trailing slash strips path; /ar becomes /
}
```

**Apache:**

```apache
ProxyPreserveHost On
ProxyPass / http://127.0.0.1:5500/
ProxyPassReverse / http://127.0.0.1:5500/
```

(Here the path is preserved because we’re proxying `/` to the root of the backend.)

**When the app is at a subpath (e.g. `/portal/`):**

1. Set env: `BASE_PATH=/portal`.
2. In **every HTML file** (`index.html`, `moreGames.html`, `myAccount.html`, `termsAndConditions.html`), add inside `<head>`:

```html
<meta name="app-base-path" content="/portal">
```

Then English is at `https://example.com/portal/` and Arabic at `https://example.com/portal/ar`.

---

## 8. Production checklist

- [ ] Run `npm install --production` (or `npm ci`) on the server.
- [ ] Set `PORT` to your actual port (e.g. 80/443 behind reverse proxy).
- [ ] If using a reverse proxy (Nginx/Apache), proxy to `http://127.0.0.1:<PORT>` and keep the same path (e.g. `/ar` and `/ar/...` must reach this app as-is).
- [ ] No hardcoded localhost in front-end: locale is derived from path (`/` vs `/ar`), so it works on any host/domain.
- [ ] If using a subpath, set `BASE_PATH` and add `<meta name="app-base-path" content="/your-path">` in all HTML files.

---

## 9. Quick test after deploy

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:5500/
# Expect 200

curl -s -o /dev/null -w "%{http_code}" http://localhost:5500/ar
# Expect 200
```

Both should return `200`. Then open the same URLs in a browser and confirm English (/) and Arabic (/ar).
