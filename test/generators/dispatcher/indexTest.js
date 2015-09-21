'use strict';
let path = require('path');
let assert = require('yeoman-generator').assert;
let helpers = require('yeoman-generator').test

describe('react-webpack-alt:dispatcher', () => {

  let generatorDispatcher = path.join(__dirname, '../../../generators/dispatcher');

  /**
   * Return a newly generated dispatcher with given name
   * @param {String} name
   * @param {Function} callback
   */
  function createGeneratedDispatcher(name, callback) {
    helpers.run(generatorDispatcher)
      .withArguments([name])
      .on('end', callback);
  }

  it('should create the new ALT dispatcher when invoked', (done) => {

    createGeneratedDispatcher('Dispatcher', () => {

      assert.file([
        'src/components/Dispatcher.js'
      ]);
      assert.fileContent('src/components/Dispatcher.js', 'var Alt = require(\'alt\');');

      done();
    });
  });

});
