var http = require('http');
var url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');
  var tmpData =[];
  res.on("data", (data) => {
    tmpData.push(data);
  });
  res.on('end',() => {
    tmpData.forEach((item) => {
      console.log(item)
    })
  })
})