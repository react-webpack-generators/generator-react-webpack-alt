'use strict';
const ReactWebpackGenerator = require('yeoman-generator');

/**
 * Base generator. Will copy all required files from react-webpack-template
 */
class AppGenerator extends ReactWebpackGenerator.Base {

  install() {
    if(!this.options['skip-install']) {
      this.installDependencies({ bower: false });
    }

    // Run the base react-webpack generator, then run the dispatcher
    this.composeWith(
      'react-webpack',
      {
        options: {
          'skip-install': this.options['skip-install']
        }
      },
      {
        local: require.resolve('generator-react-webpack'),
        link: 'strong'
      }
    ).on('end', () => {

      // Run the create dispatcher method
      this.composeWith('react-webpack-alt:dispatcher', {
        options: {},
        args: ['Dispatcher']
      });

      // Install alt.js and its dependencies as requirement
      this.npmInstall(['alt', 'alt-container'], { save: true });
      this.npmInstall(['alt-utils'], { saveDev: true });
    });
  }
}

module.exports = AppGenerator;
