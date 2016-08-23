'use strict';
const Generators = require('yeoman-generator');

class AllGenerator extends Generators.Base {

  constructor(args, options) {
    super(args, options);
    this.argument('name', { type: String, required: true });
  }

  writing() {

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
}

module.exports = AllGenerator;
