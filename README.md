# babylon-react-templates-parser

Import your React Templates with Babel for server side rendering.

## Installation

```sh
$ npm install babylon-react-templates-parser --save-dev
```

## Usage

### Options

Plugin options (under parserOpts property inside your .babelrc file) are passed to `reactTemplates.convertTemplateToReact`.

There is also an `fileExt` option for you to specify the extension you want to be compiled by React Templates (the default is `.rt`).

### `.babelrc`

**.babelrc**

```json
{
    "parserOpts": {
      "parser": "babylon-react-templates",
      "fileExt": ".rt"
    }
}
```


## Examples

This Babel plugin requires you to import your template dependencies BEFORE your templates. For example,

```js
import template from './my_component.template.rt';

class MyComponent extends React.Component{
  // ...
  render(){
    return template.call(this);
  }
  // ...
}

```

OR

```js
let template = require('./my_component.template.rt');

class MyComponent extends React.Component{
  // ...
  render(){
    return template.call(this);
  }
  // ...
}

```
