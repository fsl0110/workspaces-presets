"use strict";

module.exports = {
  automock: false,
  bail: false,
  browser: false,
  cache: true,
  cacheDirectory: "../../node_modules/.cache/jest",
  collectCoverageFrom: ["src/**/*.(ts|tsx|js|jsx|mjs|node)"],
  coverageDirectory: ".testreports",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "^.+(.generated.).+$",
    "^.*\\.d\\.ts$",
    "^.*\\.stories\\.tsx$",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ["lcov"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "node", "json"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve(
      require.resolve("./utils/fileMock.js")
    ),
    "\\.(css|less|sass|scss|styl)$": require.resolve("./utils/styleMock.js"),
  },
  setupFilesAfterEnv: [require.resolve("./utils/setupTests.js")],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ["/node_modules/"],
  // This option allows you to use a custom sequencer instead of Jest's default. sort may optionally return a Promise.
  testSequencer: "@jest/test-sequencer", // default = @jest/test-sequencer
  // Default timeout of a test in milliseconds.
  testTimeout: 5000, // default = 5000
  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href.
  testURL: "http://localhost/", // default = http://localhost
  // Setting this value to legacy or fake allows the use of fake timers for functions such as setTimeout.
  timers: "real", // default = real

  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
