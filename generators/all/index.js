'use strict';
let generator = require('yeoman-generator');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {

    // Generate the alt store
    // @todo: Implement automatic inclusion of generated action
    this.composeWith(
      'react-webpack-alt:store',
      { options: {}, args: [ this.name ] },
      { local: require.resolve('../store') }
    );

    this.composeWith(
      'react-webpack-alt:action',
      { options: {}, args: [ this.name ] },
      { local: require.resolve('../action') }
    );
  }
});
