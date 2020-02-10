'user strict' ;

const events = require('./event.js');

events.on('log', logger);
events.on('error' , errorHandler);
events.on('success' , done);


function done(process){
  console.log(`${process} Done Successfully`);
}

function errorHandler(err){
  console.log(err);
}


function logger(event){
  let date = new Date().toUTCString();
  console.log({event , date});
}

module.exports = { done , errorHandler , logger};