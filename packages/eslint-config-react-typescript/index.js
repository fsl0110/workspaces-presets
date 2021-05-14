"use strict";

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "sonarjs"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:sonarjs/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "**/node_modules/**",
    "**/build/**",
    "**/dist/**",
    "**/public/**",
  ],
  rules: {
    "react/prop-types": 0,
    "no-console": 1,
    "@typescript-eslint/no-unused-vars": 2,
  },
};
