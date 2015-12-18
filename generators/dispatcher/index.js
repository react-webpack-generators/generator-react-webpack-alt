'use strict';
let generator = require('yeoman-generator');

module.exports = generator.Base.extend({

  constructor: function() {
    generator.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
  },

  writing: function() {

    // Copy the dispatcher file
    this.fs.copyTpl(
      this.templatePath('Dispatcher.js'),
      this.destinationPath(`src/components/${this.name}.js`)
    );
  }
});
