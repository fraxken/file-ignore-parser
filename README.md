# file-ignore-parser
![version](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SlimIO/is/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)

Parse ignore files (.gitignore and .npmignore)

## Requirements
- [Node.js](https://nodejs.org/en/) v10 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i file-ignore-parser
# or
$ yarn add file-ignore-parser
```

## Usage example
```js
const parser = require("file-ignore-parser");

parser(".gitignore").then(console.log).catch(console.error);
```

> If you want an Array you can convert the Set with Array.from()

## API

### parser(location: string): Promise< Set< string > >
Parse a given file and return a Set of unique string.

## License
MIT
