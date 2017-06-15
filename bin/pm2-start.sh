#!/bin/bash
sudo NODE_ENV=production pm2 start ../app/server.js --name "example"
