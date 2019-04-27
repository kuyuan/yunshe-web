const path = require('path');

module.exports = {
  globalSetup: path.resolve(__dirname, './support/test/setup.ts'),
  globalTeardown: path.resolve(__dirname, './support/test/teardown.ts'),
  setupFiles: [
    path.resolve(__dirname, './support/test/suitSetup.ts')
  ],
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(ts|js)?(x)",
    "<rootDir>/src/**/?(*.)(spec|test).(ts|js)?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testURL: "http://localhost",
  preset: "ts-jest"
};
