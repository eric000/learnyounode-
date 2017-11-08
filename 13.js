var http = require('http');
var url = require('url')
var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'application/json'})
  var parseUrl = url.parse(req.url, true);
  var time = new Date(parseUrl.query.iso);
  var resFun,result;
  if(/^\/api\/parsetime/.test(req.url)){
    resFun = (time) => {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
  }else if(/^\/api\/unixtime/.test(req.url)){
    resFun = (time) => {
      return {
        unixtime: time.getTime()
      }
    }
  }
  result = resFun(time)
  if(result) {
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end();
  }
})

server.listen(+process.argv[2])