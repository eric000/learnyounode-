var count = 0;
process.argv.forEach((item,index)=>{
  if(index >= 2){
    count += (+item);
  }
});
console.log(count)