var http = require('http');
var fs = require('fs');
var fsStream = fs.createReadStream(process.argv[3]);
var server = http.createServer( (req, res) => {
  fsStream.pipe(res)
})
server.listen(process.argv[2])