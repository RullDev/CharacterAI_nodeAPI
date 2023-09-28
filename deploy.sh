#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Start the Node.js server
node index.js

apt update && apt install chromium-browser

node -p "console.log(process.env.PUPPETEER_CACHE_DIR || require('puppeteer').default.executablePath().split('/').slice(0, -2).join('/'))"
