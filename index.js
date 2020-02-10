'use strict';


// console.log(process.argv);
const events = require('./event/event.js');
const fileSystem = require('./modules/file-module.js');
require('./event/logger.js');


let data = process.argv.pop();

if(data){

  fileSystem.capsLock(data);
  events.emit('log', 'To Upper Case Function !');

}else{
  console.log('Error!!');
}