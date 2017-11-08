var http = require('http');
var urlList = [];
process.argv.forEach((item,index) => {
  if(index>=2){
    urlList.push(item);
  }
})
var i = 2,tempArr =[];

urlList.forEach((item) => {
  sendhttp(item);
}) 

function  sendhttp (url) {
  http.get(url, (res) => {
    res.setEncoding('utf8');
    var tmpData = '';
    res.on("data", (data) => {
        tmpData += data;
    });
    res.on('end',() => {
      tempArr[i] = tmpData;
      i--;
      if(i<0&&tempArr[0]&&tempArr[1]&& tempArr[2]){
        tempArr.forEach((item) => {
          console.log(item)
        }) 
      }
    })
  })
}