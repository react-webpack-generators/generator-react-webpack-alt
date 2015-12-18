'use strict';
let generator = require('yeoman-generator');
let utils = require('generator-react-webpack/utils/yeoman');

module.exports = generator.Base.extend({

  constructor: function() {
    generator.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
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
