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
    let componentParts = cleanedPaths.split('/');
    let componentBaseName = _.capitalize(componentParts.pop());
    let componentPartPath = componentParts.join('/');

    let storePath = utils.config.getChoiceByKey('path', 'store').path;
    let testPath = utils.config.getChoiceByKey('path', 'test').path;

    // Copy the base store
    this.fs.copyTpl(
      this.templatePath('Store.js'),
      this.destinationPath(`${storePath}/${componentPartPath}/${componentBaseName}.js`),
      {
        storeClass: componentBaseName
      }
    );

    // Copy the unit test
    this.fs.copyTpl(
      this.templatePath('Test.js'),
      this.destinationPath(`${testPath}/stores/${componentPartPath}/${componentBaseName}Test.js`),
      {
        storeClass: componentBaseName,
        storePath: `stores/${componentPartPath}/${componentBaseName}`
      }
    );
  }
});
