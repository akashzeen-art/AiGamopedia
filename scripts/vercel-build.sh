#!/bin/sh
# Copy static site into Vercel output so root (/) serves index.html
set -e
mkdir -p .vercel/output/static
cp index.html moreGames.html myAccount.html termsAndConditions.html .vercel/output/static/ 2>/dev/null || true
cp index.js moreGames.js i18n.js style.css .vercel/output/static/ 2>/dev/null || true
cp image.png manifest.webmanifest .vercel/output/static/ 2>/dev/null || true
cp -r i18n images icons audios .vercel/output/static/
echo "Vercel static output ready in .vercel/output/static"
