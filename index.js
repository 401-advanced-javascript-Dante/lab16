'use strict';


// console.log(process.argv);
const events = require('./event/event.js');
const fileSystem = require('./modules/file-module.js');
const net = require('net');
const socket = new net.Socket();

require('./event/logger.js');


let data = process.argv[2];

console.log('file' ,data);


if(data){

  fileSystem.capsLock(data);
  events.emit('log', 'To Upper Case Function !');
  socket.connect(3001 , 'localhost' , ()=> {});    
  socket.write('JacKpoT!!  file-saved’', (err)=> console.error(err));
  socket.end(()=> {console.log('Done ! am Out !!');});    


}else{

  socket.connect(3001 , 'localhost' , ()=> {});    
  socket.write('Ops!!  file-error', (err)=> console.error(err));
  socket.end(()=> {console.log('Done ! am Out !!');});    
  console.log('Error!!');

}