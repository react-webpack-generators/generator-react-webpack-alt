# generator-react-webpack-alt
> Generator-React-Webpack - with Flux Support (using alt.js)

## What is it for?
This generator can be used to create and manage projects that use React, Webpack and Flux (using alt.js as implementation). It uses generator-react-webpack as a base and extends it to create new stores and actions.

## What is included?
Generator-React-Webpack-Alt includes support for creating new stores as well as their unittests, as well as the creation of actions.

It also has support for most of the features that are available in its parent project, generator-react-webpack. This includes the run-configuration, webpack, esLint and test-environment.

## Planned Features
There are currently some features missing from the generator. These will be available in a later version:

- [ ] Creation of Components like in Generator-React-Webpack (please use this configurator until it is implemented!)
- [ ] Creation of Action/Store-Pairs via a single subgenerator (react-webpack-alt:all).
- [ ] Creation of Unittests for Actions

---

## Installation
```bash
npm install -g yo
npm install -g generator-react-webpack-alt
```

## Setting up projects
```bash
# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project

# Run the generator
yo react-webpack-alt
```

## Generating new stores and actions
```bash
# After setup of course :)
# cd my-new-project
yo react-webpack-alt:action my/namespaced/actions/name
yo react-webpack-alt:store my/namespaced/stores/name

# Not yet implemented :(
yo react-webpack-alt:all my/namespaced/functions/name
```

The above command will create a new action and store, as well as its basic testcase.

## Usage
Please take a look at react-webpack-template for an in depth explanation or use `npm run` to get a list of all commands available for building and running your application.

## Contribute

Contributions are welcomed. When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

### Running Tests

`npm test` or `node node_modules/.bin/mocha`

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
