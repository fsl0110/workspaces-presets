module.exports = {
  ignoreFiles: ["build"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-prettier",
  ],
  rules: {
    "declaration-colon-newline-after": null,
    "value-list-comma-newline-after": null,
  },
};
