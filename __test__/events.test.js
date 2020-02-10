'use strict';

const logger = require('../event/logger.js');

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

});
