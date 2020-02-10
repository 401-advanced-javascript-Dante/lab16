'use strict';

const fileSystem = require('../modules/file-module.js');

let file = 'data/toste.json';
// jest.mock('fs');


describe('test' , () => {

  it('can read the file as a string' , () => {
    return fileSystem.reader(file)
      .then( (data) => { 
        console.log(data);
        expect(typeof(data.toString().trim())).toEqual('string');
      });

  });


  it('can write on the file' , () => {
    let data = JSON.stringify({'test string': 'test string'});
    let buffedData = Buffer.from(data);
    return fileSystem.writer(file , buffedData)
      .then(data => {
        console.log( 'Works');
      });
  });


  it('can convert text to UpperCase' , () => {
    fileSystem.capsLock(file);
    return fileSystem.reader(file)
      .then( (data) => { 
        console.log(data);
        expect(typeof(data.toString().trim())).toEqual('string');
      });


  });


});