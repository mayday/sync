import { remote } from 'electron'

// make electron ignore this when it comes across it
const api = remote ? remote.require('../sync-plugins/server') : {}

export const plugins = api.plugins || {}
export const getReducers = api.getReducers || (() => {})
export const getSelectors = api.getSelectors || (() => {})
export const getMiddlewares = api.getMiddlewares || (() => {})
export const getKeymaps = api.getKeymaps || (() => {})
export const getComponents = api.getComponents || (() => {})
