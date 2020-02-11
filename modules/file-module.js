'use strict';

const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile) ;
const write = util.promisify(fs.writeFile) ;

const events = require('../event/event.js');
require('../event/logger.js');



const reader = (file) => {

  try{
    // events.emit('log', 'Reading!');

    return read(file).then( (data) => {
      return data ;
    });
  }catch(e){
    return events.emit('error' , e);
  }

};


const writer = (file, data) => {
  try{
    // events.emit('log', 'Writing!');
    return write(file , data);
  }catch(e){
    return events.emit('error' , e);
  }
};



const capsLock = (file) => {

  // events.emit('log', 'ToUpperCase!');

  fs.readFile( file, (err, data) => {
    if(err) { throw err; }

    // events.emit('success' , 'Read');

    let text = data.toString().toUpperCase();
    // console.log('text', text);

    // events.emit('success' , 'ToUpperCase function');

    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      // events.emit('success' , 'Saved!');
    });
  });
};






module.exports = {reader , writer ,capsLock} ;
