'use strict' ;

const net = require('net');
const socket = new net.Socket();



function run(){
  console.log('holaa')

  socket.connect(3001 , 'localhost' , ()=> {});    
  socket.write('JacKpoT !!', (err)=> console.error(err));
  // socket.on('data' , (data) => {
  //   console.log('data logger',data)
  //   let event = data;
  //   console.log('logerrrr',event);
  // });

  socket.end(()=> {console.log('Alright am Out !!')});    


    
  socket.on('close',() => {
    console.log('Areaose Kid !!');
  });
}

module.exports = run ; 

