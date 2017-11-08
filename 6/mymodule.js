var fs = require('fs');
var path = require('path');

module.exports = (fileDir, fileType, callback) => {
  fileType ='.' + fileType ;
  fs.readdir(fileDir, (err, data) => {
    if(err) return callback(err);
    data = data.filter((item) => {
      return path.extname(item) == fileType
    })
    callback(null, data);
  })
}