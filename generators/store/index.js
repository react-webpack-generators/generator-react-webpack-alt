'use strict';
const Generators = require('yeoman-generator');
let utils = require('generator-react-webpack/utils/all');


class StoreGenerator extends Generators.Base {

  constructor(args, options) {
    super(args, options);
    this.argument('name', { type: String, required: true });
  }

  writing() {

    let destinationPath = utils.yeoman.getDestinationPath(this.name, 'store', 'Store');
    let baseName = utils.yeoman.getDestinationClassName(this.name, 'source', 'Store');

    // @todo: Clean up this stuff. Was planned to be exchanged for utils.yeoman.getDestination
    let cleanedPaths = utils.yeoman.getCleanedPathName(this.name, 'Store');
    let storeParts = cleanedPaths.split('/');
    storeParts.pop();
    let storePartPath = storeParts.join('/');

    let testPath = utils.config.getChoiceByKey('path', 'test').path;

    // Copy the base store
    this.fs.copyTpl(
      this.templatePath('Store.js'),
      this.destinationPath(destinationPath),
      {
        storeClass: baseName
      }
    );

    // Copy the unit test
    this.fs.copyTpl(
      this.templatePath('Test.js'),
      this.destinationPath(`${testPath}/stores/${storePartPath}/${baseName}Test.js`),
      {
        storeClass: baseName,
        storePath: `stores/${storePartPath}/${baseName}`
      }
    );
  }
}

module.exports = StoreGenerator;
