const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node Server</title></head>')
    res.write('<body><h1>Node Server</h1></body>')
    res.write('</html>')
    res.end()
  }
  if (req.url === '/api') {
    const nationalChampions = {
      'title': 'National Champions',
      'team': 'Clemson',
      'city': 'Clemson',
      'state': 'South Carolina',
      'record': '15-0',
      'year': 2019
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(nationalChampions))
    res.end()
  }
})

server.listen(5000)