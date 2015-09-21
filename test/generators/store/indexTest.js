'use strict';
let path = require('path');
let assert = require('yeoman-generator').assert;
let helpers = require('yeoman-generator').test

describe('react-webpack-alt:store', () => {

  let generatorStore = path.join(__dirname, '../../../generators/store');

  /**
   * Return a newly generated dispatcher with given name
   * @param {String} name
   * @param {Function} callback
   */
  function createGeneratedStore(name, callback) {
    helpers.run(generatorStore)
      .withArguments([name])
      .on('end', callback);
  }

  describe('When creating a new store', () => {

    it('should create the store file', (done) => {
      createGeneratedStore('test', () => {
        assert.file([ 'src/stores/TestStore.js' ]);
        done();
      });
    });

    it('should include an import statement for the alt dispatcher', (done) => {

      createGeneratedStore('test', () => {
        assert.fileContent('src/stores/TestStore.js', `import alt from 'components/Dispatcher';`);
        done();
      });
    });

    it('should export the created store as well as the wrapped altStore', (done) => {
      createGeneratedStore('test', () => {

        assert.fileContent('src/stores/TestStore.js', `export class TestStore`);
        assert.fileContent('src/stores/TestStore.js', `export default alt.createStore(TestStore, 'TestStore'`);
        done();
      });
    });

    it('should create the stores unit test', (done) => {

      createGeneratedStore('test', () => {
        assert.file(['test/stores/TestStoreTest.js']);
        assert.fileContent('test/stores/TestStoreTest.js', `import alt from 'components/Dispatcher'`);
        assert.fileContent('test/stores/TestStoreTest.js', `import { TestStore } from 'stores//TestStore';`);
        done();
      });
    });

  });
});
