var net = require('net');
var server = net.createServer((socket) => {
  let nowDate = new Date(), data='';
  var year = add(nowDate.getFullYear());
  var month = add(nowDate.getMonth() + 1);
  var day = add(nowDate.getDate());
  var hour = add(nowDate.getHours());
  var minutes = add(nowDate.getMinutes())
  
  data = `${year}-${month}-${day} ${hour}:${minutes}\n`//YYYY-MM-DD hh:mm
  socket.end(data)
})
server.listen(process.argv[2])

function add (data) {
/*   if(data < 10 ) {
    return '0' + data;
  }
  return data */
  return (data < 10 ? '0' : '' ) + data;
}