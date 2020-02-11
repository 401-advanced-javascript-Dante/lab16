'use strict';

const logger = require('../event/logger.js');
const server = require('../server/server.js');

describe('Test Event Handlers' , () => {
  let consoleSpy ;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console , 'log').mockImplementation();
        
  });

  afterEach(() => {
    consoleSpy.mockRestore() ;
  });


  it('Success Message handler Works !' , () => {

    logger.done();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('error handler Works !' , () => {

    logger.errorHandler();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('logger handler Works !' , () => {

    logger.logger();
    expect(consoleSpy).toHaveBeenCalled();
  });


  it('Broadcast handler Works !' , () => {

    server('7b 22 74 65 73 74 20 73 74 72 69 6e 67 22 3a 22 74 65 73 74 20 73 74 72 69 6e 67 22 7d');
    expect(consoleSpy).toHaveBeenCalled();
  });




});
