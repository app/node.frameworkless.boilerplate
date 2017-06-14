var http = require('http')
function listener (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h2>Plain or frameworkless Node.js boilerplate home page</h2>')
}

const server = http.createServer(listener)
server.listen(1337, '127.0.0.1')
console.log('Server running at http://127.0.0.1:1337/')
