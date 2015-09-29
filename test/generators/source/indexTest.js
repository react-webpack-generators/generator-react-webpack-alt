'use strict';
let path = require('path');
let assert = require('yeoman-generator').assert;
let helpers = require('yeoman-generator').test

describe('react-webpack-alt:source', () => {

  let generatorSource = path.join(__dirname, '../../../generators/source');

  /**
   * Return a newly generated source with given name
   * @param {String} name
   * @param {Function} callback
   */
  function createGeneratedSource(name, callback) {
    helpers.run(generatorSource)
      .withArguments([name])
      .on('end', callback);
  }

  describe('When creating a new source', () => {

    it('should create the source file', (done) => {
      createGeneratedSource('test', () => {
        assert.file([ 'src/sources/TestSource.js' ]);
        done();
      });
    });

    it('should export the alt source', (done) => {

      createGeneratedSource('test', () => {
        assert.fileContent('src/sources/TestSource.js', `const TestSource`);
        assert.fileContent('src/sources/TestSource.js', `export default TestSource;`);
        done();
      });
    });
  });
});
