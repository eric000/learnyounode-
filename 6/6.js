var func = require('./mymodule');

var fileDir = process.argv[2],
    fileType = process.argv[3];
func(fileDir, fileType, (err, data)=>{
  if(err) return err;
  data.forEach((item) =>{ 
    console.log(item);
  })
});