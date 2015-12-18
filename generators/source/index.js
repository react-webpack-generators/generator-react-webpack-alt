'use strict';
let generator = require('yeoman-generator');
let utils = require('generator-react-webpack/utils/yeoman');

module.exports = generator.Base.extend({

  constructor: function() {
    generator.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
  },

  writing: function() {

    let destinationPath = utils.getDestinationPath(this.name, 'source', 'Source');
    let baseName = utils.getDestinationClassName(this.name, 'source', 'Source');

    this.fs.copyTpl(
      this.templatePath('Source.js'),
      this.destinationPath(destinationPath),
      {
        sourceClass: baseName
      }
    );
  }
});
