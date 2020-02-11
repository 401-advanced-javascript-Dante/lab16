'use strict';


// console.log(process.argv);
const events = require('./event/event.js');
const fileSystem = require('./modules/file-module.js');
const net = require('net');
const socket = new net.Socket();
const fire = require('./logger/logger.js');
require('./event/logger.js');


let data = process.argv[2];

if(data){

  fileSystem.capsLock(data);
  fire();
  events.emit('log', 'To Upper Case Function !');

  // socket.connect(3001 , 'localhost' , ()=> {});    
  // socket.write('JacKpoT !!', (err)=> console.error(err));


}else{
  console.log('Error!!');
}