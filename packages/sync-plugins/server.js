/* eslint-disable no-param-reassign */
import _ from 'lodash'
import { basename, resolve } from 'path'

const pluginPaths = [
  '../sync-plugin-branches',
  '../sync-plugin-commits',
  '../sync-plugin-jump-to-project',
  '../sync-plugin-local-changes',
  '../sync-plugin-projects',
]

const requirePackage = (path) => {
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const pkg = require(path)
    if (pkg) {
      pkg.packageName = basename(path)
    }
    return pkg
  } catch (err) {
    console.log('NODE: ERROR LOADING PACKAGE', basename(path)) // eslint-disable-line no-console
    console.error(err) // eslint-disable-line no-console
    return false
  }
}

const loadPackages = (paths) => {
  return _.reduce(paths, (cache, path) => {
    const pkg = requirePackage(resolve(path))
    if (pkg) {
      cache[pkg.packageName] = pkg
    }
    return cache
  }, {})
}

export const plugins = loadPackages(pluginPaths)

const withKeys = key => _.reduce(plugins, (combineReducer, plugin) => {
  if (plugin[key]) {
    combineReducer[plugin.packageName] = plugin[key]
  }
  return combineReducer
}, {})

export const getReducers = () => withKeys('reducer')
export const getSelectors = () => withKeys('selectors')
export const getKeymaps = () => withKeys('keymap')
export const getComponents = () => withKeys('default')
