module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/dist/**',
    '!**/*.config.js',
    '!**/vendor/**',
    '!**/tests/e2e/**',
    '!**/main.js',
    '!**/coverage/**',
    "!src/*/vuetify.js",
    "!src/router/index.js",
    "!src/store/index.js"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}
