'use strict';
const Generators = require('yeoman-generator');
const utils = require('generator-react-webpack/utils/yeoman');

class ActionGenerator extends Generators.Base {

  constructor(args, options) {
    super(args, options);
    this.argument('name', { type: String, required: true });
  }

  writing() {

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
}

module.exports = ActionGenerator;
