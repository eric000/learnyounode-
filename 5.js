var fs = require('fs');
var path = require('path');
var filePath = process.argv[2],
    fileType = '.' + process.argv[3]
fs.readdir(filePath, (err, list) => {
  if (err) throw err;
  list.forEach((item) => {
    if(path.extname(item) == fileType)
      console.log(item);
  })
})
