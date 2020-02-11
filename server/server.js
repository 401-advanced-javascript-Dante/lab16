'use strict' ;

const net = require('net');
const PORT = process.env.PORT || 3001 ;
const server = net.createServer();

let usersSpace = {} ;
console.log('space' , usersSpace);
server.on('connection' , (user) => {
  const id = `User ID: ${Math.random()} `;
  console.log('New User==> YAY!! ', id);
  usersSpace[id] = user ;
  user.on('data' , (buffer)=> broadcast(buffer));
  user.on('end' , () => delete usersSpace[id]);
  user.on('error' , (e) => console.error(e));
});



function broadcast(data){
  // console.log('broadcast', data);
  let message = JSON.stringify(data.toString().trim());
  // console.log('broadcast after', message);
    
  for(let user in usersSpace){
    usersSpace[user].write(message);
  }
  console.log('Status!',message);
}


server.listen(PORT , ()=> {
  console.log(`Let's Rock !! ${PORT}`);
});


module.exports = broadcast ;