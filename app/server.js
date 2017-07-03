const http = require('http')
const url = require('url')
const fs = require('fs')

const webPath = __dirname.concat('/../web')
const host = `localhost`
const port = `1337`

/**
 * This is server side code place
 *
 * @param req — http request object
 * @param res — http response object
 * @returns — nothing
 */
function listener (req, res) {
  const purl = url.parse(req.url, true)
  if (purl.pathname === '/') {
    purl.pathname = '/index.html'
  }
  fs.stat(webPath.concat(purl.pathname), function (err, st) {
    if (err || !st.isFile()) {
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.end('File Not Found')
    } else {
      var extention = purl.pathname.match(/\..+$/)[0]
      var mime = {
        '.js': 'text/javascript; charset=UTF-8',
        '.txt': 'text/plain; charset=UTF-8',
        '.html': 'text/html; charset=UTF-8',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.jpg': 'image/jpeg'
      }
      res.writeHead(200, {'Content-Type': mime[extention]})
      fs.readFile(webPath.concat(purl.pathname), function (err, data) {
        if (err) throw err
        res.end(data)
      })
    }
  })
}

/// Create server
const server = http.createServer(listener)
/// Start server
server.listen(port, host)
/// Show address to open browser with
console.log(`Server running at http://${host}:${port}/`)
