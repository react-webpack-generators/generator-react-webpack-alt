'use strict';
let generator = require('yeoman-generator');
let utils = require('generator-react-webpack/utils/all');
let _ = require('lodash');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {

    let cleanedPaths = utils.yeoman.getCleanedPathName(this.name, 'Actions');
    let actionParts = cleanedPaths.split('/');
    let actionBaseName = _.capitalize(actionParts.pop());
    let actionPartPath = actionParts.join('/');

    let actionPath = utils.config.getChoiceByKey('path', 'action').path;

    this.fs.copyTpl(
      this.templatePath('Action.js'),
      this.destinationPath(`${actionPath}/${actionPartPath}/${actionBaseName}.js`),
      {
        actionClass: actionBaseName
      }
    );

  }
});
