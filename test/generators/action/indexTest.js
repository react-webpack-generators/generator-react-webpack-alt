'use strict';
let path = require('path');
let assert = require('yeoman-assert');
let helpers = require('yeoman-test');

describe('react-webpack-alt:action', () => {

  let generatorAction = path.join(__dirname, '../../../generators/action');

  /**
   * Return a newly generated action with given name
   * @param {String} name
   * @param {Function} callback
   */
  function createGeneratedAction(name, callback) {
    helpers.run(generatorAction)
      .withArguments([name])
      .on('end', callback);
  }

  describe('When creating a new action', () => {

    it('should create the store file', (done) => {
      createGeneratedAction('test', () => {
        assert.file([ 'src/actions/TestActions.js' ]);
        done();
      });
    });

    it('should include an import statement for the alt dispatcher', (done) => {

      createGeneratedAction('test', () => {
        assert.fileContent('src/actions/TestActions.js', `import alt from 'components/Dispatcher';`);
        done();
      });
    });

    it('should export the alt action', (done) => {

      createGeneratedAction('test', () => {
        assert.fileContent('src/actions/TestActions.js', `class TestActions`);
        assert.fileContent('src/actions/TestActions.js', `export default alt.createActions(TestActions);`);
        done();
      });
    });
  });
});
