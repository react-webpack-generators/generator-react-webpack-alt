'use strict';
let generator = require('yeoman-generator');
let utils = require('generator-react-webpack/utils/yeoman');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {

    let destinationPath = utils.getDestinationPath(this.name, 'action', 'Actions');
    let baseName = utils.getDestinationClassName(this.name, 'action', 'Actions');

    this.fs.copyTpl(
      this.templatePath('Action.js'),
      this.destinationPath(destinationPath),
      {
        actionClass: baseName
      }
    );
  }
});
