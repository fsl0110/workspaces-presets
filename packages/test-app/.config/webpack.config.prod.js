'use strict';

module.exports = env => ({
  ...require('@fsl0110/webpack-preset')({ mode: 'production', env }),
  /*  entry: ['./src/index.tsx'], */
  /*  output: {path: __dirname + '/build/'}, */
});
