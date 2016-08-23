'use strict';
const Generators = require('yeoman-generator');

class DispatcherGenerator extends Generators.Base {

  constructor(args, options) {
    super(args, options);
    this.argument('name', { type: String, required: true });
  }

  writing() {

    // Copy the dispatcher file
    this.fs.copyTpl(
      this.templatePath('Dispatcher.js'),
      this.destinationPath(`src/components/${this.name}.js`)
    );
  }
}

module.exports = DispatcherGenerator;
