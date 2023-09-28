#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Start the Node.js server
node index.js

apt update && apt install chromium-browser
