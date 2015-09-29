'use strict';
let generator = require('yeoman-generator');
let utils = require('generator-react-webpack/utils/all');
let _ = require('lodash');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {

    let cleanedPaths = utils.yeoman.getCleanedPathName(this.name, 'Source');
    let parts = cleanedPaths.split('/');
    let baseName = _.capitalize(parts.pop());
    let partPath = parts.join('/');

    let sourcePath = utils.config.getChoiceByKey('path', 'source').path;

    this.fs.copyTpl(
      this.templatePath('Source.js'),
      this.destinationPath(`${sourcePath}/${partPath}/${baseName}.js`),
      {
        sourceClass: baseName
      }
    );
  }
});
