module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|)',
  ],
  rootDir: '.',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  coverageDirectory: '<rootDir>/__tests__/coverage',
  testRegex: '(/__tests__/unit/utils/.*|(\\.|/)(test|spec|unit))\\.(jsx?|js?)$',
};
