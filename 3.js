var fs = require('fs');
var tmpStr = fs.readFileSync(process.argv[2]).toString();//3
/* 4 异步
fs.readFile('/path/to/file',(err, data) => {
  if(err) throw err;
    console.log(data.split('\n').length - 1);
}) */
var arr = tmpStr.split('\n');
console.log(arr.length - 1);
