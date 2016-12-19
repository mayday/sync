import { remote } from 'electron'

// make electron ignore this when it comes across it
const plugins = remote ? remote.require('../sync-plugins/server') : {}

export const getReducers = plugins.getReducers || (() => {})
export const getSelectors = plugins.getSelectors || (() => {})
export const getKeymaps = plugins.getKeymaps || (() => {})
export const getComponents = plugins.getComponents || (() => {})
