## Drop-in boilerplate/starter code and folder structure for plain/frameworkless Node.js project start
Simple server side Node.js application (for example API provider with simple Web UI) — is the best usage case of the boilerplate.  

### Main features
- Command line oriented development. No IDE, no framework, just your faivorite code editor and powerful set of tools 
- Hot page and resource reloading while code editing in development mode
- Resource bundling and minification with no config for production deployment
- No paths in imports. Just dependency name for vendor libs as well as your modules located in 
 `app/node_modules` folder for Node’s dependencies resolution algorithm  

### Folders structure

- `/app` — server side application code folder
- `/app/node_modules` - place your server modules here
- `/public` — client side html/jpeg/css files and javascript code for your "serverless" application
- `/install` — database initialization scripts and other files for server app deployment
- `/bin` — server side application start/stop scripts and similar helpers
- `/node_modules` — place for third party libs. Will reveille itself after `npm install` commadn execution. You do NOT want to place it under git control :)

### How to install
```
git clone https://github.com/app/node.frameworkless.boilerplate.git my-best-app
cd my-best-app
npm i
```

### How to use in development
Start you server app with
```
npm run dev
```
Start you static client app with
```
npm run web
```
### How to use for production
```
npm run build
```
will create minified and bundled static app in dist/ direcrory.  
You have to copy dist/ where nginx root indicates.  
  
For server application you have to setup systemd service with [this example](install/README.md)  

### Troubleshooting
#### Safe Write
Some text editors and IDE's have a feature called safe write that basically prevents data loss, by taking a copy of the file and renaming it when saved.  
  
This feature blocks the automatic detection of file updates. To disable safe write use the options provided below:  

- Sublime Text 3 add atomic_save: "false" to your user preferences.  
- IntelliJ use search in the preferences to find "safe write" and disable it.  
- Vim add :set backupcopy=yes to your settings.  
- WebStorm uncheck Use "safe write" in Preferences > Appearance & Behavior > System Settings.  

### References
- Node 8.x API Reference
- [plain vanilla node.js intro tutorial](https://gist.github.com/shimondoodkin/6213581)
- [Working without frameworks](https://medium.com/node-js-javascript/working-without-frameworks-part-1-b948f281f782)
- [Running Node.js on Linux with systemd](https://blog.codeship.com/running-node-js-linux-systemd/)
