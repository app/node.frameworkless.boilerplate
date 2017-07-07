## Drop-in boilerplate code and folder structure for plain Node.js project start
Simple server side Node.js application (for example API provider) — is the best usage case of the boilerplate.  

### Main features
- Command line oriented development. No IDE, no framework, just your faivorite code editor  
- Break you app into modules and put them to `app/node_modules` folder for Node’s require algorithm  
- Develop your app by running `node app/server.js`  
- Deploy your app by targeting nginx/apache config root to `web/` folder and run `./bin/pm2-start.sh` daemon  

### Folders structure

- `/app` — server side application code folder
- `/app/node_modules` - place for your app's modules code
- `/web` — client side html/jpeg/css files and javascript code for in user's browser execution
- `/install` — database initialization scripts and other files for app deployment
- `/bin` — server side application start/stop scripts and similar helpers
- `/node_modules` — place for third party libs. Will reveille itself after `npm install` commadn execution. You do NOT want to place it under git control :)

### How to use/install
```
git clone https://github.com/app/node.frameworkless.boilerplate.git
```
Or simple download and extract zip file https://github.com/app/node.frameworkless.boilerplate/archive/master.zip  
```
mv node.frameworkless.boilerplate my-best-app
cd my-best-app
git remote remove origin
```

### References
- Node 8.x API Reference
- [plain vanilla node.js intro tutorial](https://gist.github.com/shimondoodkin/6213581)
- [Working without frameworks](https://medium.com/node-js-javascript/working-without-frameworks-part-1-b948f281f782)
