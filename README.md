## Drop-in boilerplate code and folder structure for quick start plain Node.js project
Simple server side Node.js application (for example API provider) — is the best usage case of the boilerplate.  

### Main features
- Command line oriented development. No IDE, no framework, just your faivorite code editor  
- Brake you app in modules and put them to `app/node_modules` folder for Node’s require algorithm  
- Develop your app by running `node app/server.js`  
- Deploy your app by targeting nginx/apache config root to `web/` folder and run `./bin/pm2-start.sh` daemon  

### Folder structure

SBD

### How to use/install
```
git clone https://github.com/app/node.frameworkless.boilerplate.git
```
Or simple download and extract zip file https://github.com/app/node.frameworkless.boilerplate/archive/master.zip  
```
mv node.frameworkless.boilerplate my-best-app
cd my-best-app
```

### References
- Node 8.x API Reference
- [plain vanilla node.js intro tutorial](https://gist.github.com/shimondoodkin/6213581)
- [Working without frameworks](https://medium.com/node-js-javascript/working-without-frameworks-part-1-b948f281f782)
