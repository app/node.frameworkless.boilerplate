const http = require('http')
const url = require('url')
const fs = require('fs')
const webPath = __dirname.concat('/../web')

/**
 * Main server loop
 *
 * @param req request data
 * @param res {response object}
 * @returns {undefined}
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

const server = http.createServer(listener)
server.listen(1337, 'localhost')
console.log('Server running at http://localhost:1337/')
