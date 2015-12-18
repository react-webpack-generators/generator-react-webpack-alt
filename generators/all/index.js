'use strict';
let generator = require('yeoman-generator');

module.exports = generator.Base.extend({

  constructor: function() {
    generator.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
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
