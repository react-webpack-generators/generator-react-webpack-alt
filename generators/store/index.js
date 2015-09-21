'use strict';
let generator = require('yeoman-generator');
let utils = require('generator-react-webpack/utils/all');
let _ = require('lodash');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {

    let cleanedPaths = utils.yeoman.getCleanedPathName(this.name, 'Store');
    let storeParts = cleanedPaths.split('/');
    let storeBaseName = _.capitalize(storeParts.pop());
    let storePartPath = storeParts.join('/');

    let storePath = utils.config.getChoiceByKey('path', 'store').path;
    let testPath = utils.config.getChoiceByKey('path', 'test').path;

    // Copy the base store
    this.fs.copyTpl(
      this.templatePath('Store.js'),
      this.destinationPath(`${storePath}/${storePartPath}/${storeBaseName}.js`),
      {
        storeClass: storeBaseName
      }
    );

    // Copy the unit test
    this.fs.copyTpl(
      this.templatePath('Test.js'),
      this.destinationPath(`${testPath}/stores/${storePartPath}/${storeBaseName}Test.js`),
      {
        storeClass: storeBaseName,
        storePath: `stores/${storePartPath}/${storeBaseName}`
      }
    );
  }
});
