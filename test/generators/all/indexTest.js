'use strict';
let path = require('path');
let assert = require('yeoman-assert');
let helpers = require('yeoman-test');

describe('react-webpack-alt:all', () => {

  let generatorAll = path.join(__dirname, '../../../generators/all');

  /**
   * Return a newly generated all instance with given name
   * @param {String} name
   * @param {Function} callback
   */
  function createGeneratedAll(name, callback) {
    helpers.run(generatorAll)
      .withArguments([name])
      .on('end', callback);
  }

  describe('When using the all action', () => {

    it('should create the actions and store files', (done) => {
      createGeneratedAll('test', () => {
        assert.file([ 'src/actions/TestActions.js' ]);
        assert.file([ 'src/stores/TestStore.js' ]);
        assert.file([ 'test/stores/TestStoreTest.js' ]);
        done();
      });
    });
  });

});
