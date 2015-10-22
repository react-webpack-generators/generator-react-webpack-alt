'use strict';
let generator = require('yeoman-generator');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {

    // Build options
    let opts = {};

    if(this.options.stateless === true) {
      opts.stateless = true;
    }

    this.composeWith('react-webpack:component', {
      options: opts,
      args: [ this.name ]
    });
  }
});
