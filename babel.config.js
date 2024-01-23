/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = function (api) {
  api.cache(true)
  const plugins = []

  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins
  }
}
