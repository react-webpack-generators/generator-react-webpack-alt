'use strict';

let generator = require('yeoman-generator');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {
    this.composeWith('react-webpack:component', {
      options: {},
      args: [ this.name ]
    });
  }

});
