### Drop-in boilerplate code and folder structure for quick start plain Node.js project
### This is for vim users. Check [master](https://github.com/app/node.frameworkless.boilerplate) for editor independent version
Simple server side Node.js application (for example API provider) — is the best usage case of the boilerplate.  

# Main features
- Command line oriented development. No IDE, no framework, just your faivorite code editor  
- Brake you app in modules and put them to app/node_modules folder for Node’s require algorithm  
- Develop your app by running node app/server.js  
- Deploy your app by targeting nginx/apache config root to web/ folder and run bin/pm2-start.sh script  

### Folder structure

### How to use/install
```
git clone https://github.com/app/node.frameworkless.boilerplate.git
```
Or simple download and extract zip file https://github.com/app/node.frameworkless.boilerplate/archive/vim.zip  
```
mv node.frameworkless.boilerplate my-best-app
cd my-best-app
```
### Javascript linter (optional setup)
Follow steps assumes you have node and npm command in your shell. Search in google 'How to install node.js and npm' for you system if not.   
```
npm init
npm install eslint locate-path eslint-plugin-promise@latest eslint-plugin-standard@latest --save-dev
./node_modules/.bin/eslint --init
```
Choose 'standard' code style from popular styles  
```
git commit -m 'Import' ./package.json ./package-lock.json
```

### References
- Node 8.x API Reference
- [plain vanilla node.js intro tutorial](https://gist.github.com/shimondoodkin/6213581)
- [Working without frameworks](https://medium.com/node-js-javascript/working-without-frameworks-part-1-b948f281f782)
