'use strict' ;

const net = require('net');
const socket = new net.Socket();

socket.connect(3001 , 'localhost' , ()=> {});    


// console.log('holaa');
// socket.write('JacKpoT !!', (err)=> console.error(err));
    
socket.on('data' , (data) => {
  let time = new Date().toUTCString();
  console.log('data logger',Buffer.from(data).toString() , time);
});
      
// socket.end(()=> {console.log('Done ! am Out !!');});    
      
// socket.on('close', () => {
//   console.log('connection closed...');
// });

      
// socket.on('close',() => {
//   console.log('Areaose Kid !!');
// });
// socket.connect(3001 , 'localhost' , ()=> {});    
// socket.write('File Error !!', (err)=> console.error(err));
// socket.end(()=> {console.log('Alright am Out !!');});    

