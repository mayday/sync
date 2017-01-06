/* eslint-disable no-param-reassign */
import { remote } from 'electron'
import _ from 'lodash'

// make electron ignore this when it comes across it
const api = remote ? remote.require('../sync-plugins/server') : {}

const plugins = api.plugins || {}

const withKeys = key => _.reduce(plugins, (combineReducer, plugin) => {
  if (plugin[key]) {
    combineReducer[plugin.packageName] = plugin[key]
  }
  return combineReducer
}, {})

const inArray = key => _(plugins).map(key).compact().value()

export const getReducers = () => withKeys('reducer')
export const getSelectors = () => withKeys('selectors')
export const getMiddlewares = () => inArray('middleware')
export const getKeymaps = () => withKeys('keymap')
export const getComponents = () => withKeys('default')
export const getUI = () => _.flatten(inArray('ui'))
export const getUIByContext = context => _.filter(getUI(), { context })
export const getWindowOnFocus = () => inArray('windowOnFocus')
