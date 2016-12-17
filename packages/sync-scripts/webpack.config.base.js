import path from 'path'
import validate from 'webpack-validator'

const packages = [
  'redux-git-middleware',
  'sync-app',
  'sync-assets',
  'sync-components',
  'sync-electron',
  'sync-plugin',
  'sync-plugin-branches',
  'sync-plugin-jump-to-project',
  'sync-plugin-projects',
  'sync-store',
  'sync-store-git',
  'sync-store-settings',
  'sync-store-ui',
  'sync-theme-ui-dark',
  'sync-window',
]

const exclude = new RegExp(`node_modules/(?!${ packages.join('|') })`)

export default validate({
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude,
    }, {
      test: /\.json$/,
      loader: 'json',
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js'],
  },
})
