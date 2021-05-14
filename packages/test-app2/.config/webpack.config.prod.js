'use strict';

const config = require('@fsl0110/webpack-preset')({ mode: 'production' });

module.exports = () => ({
  ...config,
  /*  entry: ['./src/index.tsx'], */
  /*  output: {path: __dirname + '/build/'}, */
});
