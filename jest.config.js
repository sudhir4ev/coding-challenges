/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  watchman: false,
  testMatch: ['**/*.test.js', '**/*.test.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true, diagnostics: false }],
  },
  collectCoverageFrom: ['challenges/**/*.js', '!**/*.test.js'],
  testPathIgnorePatterns: ["/node_modules/", "/examples"],
};
