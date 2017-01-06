/* eslint-disable no-param-reassign, no-console */
import _ from 'lodash'
import { basename, resolve } from 'path'

const pluginPaths = [
  '../sync-analytics',
  '../sync-branches',
  '../sync-commits',
  '../sync-jump-to-project',
  '../sync-location',
  '../sync-local-changes',
  '../sync-projects',
]

const requirePackage = (path) => {
  const name = basename(path)
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const pkg = require(path)
    if (pkg) {
      pkg.packageName = name
    }
    return pkg
  } catch (err) {
    console.log('NODE: ERROR LOADING PACKAGE', name)
    console.error(err)
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
