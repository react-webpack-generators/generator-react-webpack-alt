'use strict';
const Generators = require('yeoman-generator');
const utils = require('generator-react-webpack/utils/yeoman');

class SourceGenerator extends Generators.Base {

  constructor(args, options) {
    super(args, options);
    this.argument('name', { type: String, required: true });
  }

  writing() {

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
}

module.exports = SourceGenerator;
