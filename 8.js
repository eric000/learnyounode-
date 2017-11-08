var http = require('http');
var url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');
  var tmpData = '';
  res.on("data", (data) => {
      tmpData += data;
  });
  res.on('end',() => {
      console.log(tmpData.length)
      console.log(tmpData)
  })
})


