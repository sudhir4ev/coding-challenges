/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  watchman: false,
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: ['challenges/**/*.js', '!**/*.test.js'],
  testPathIgnorePatterns: ["/node_modules/", "/examples"],
  transform: {},
};
