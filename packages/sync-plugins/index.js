import { remote } from 'electron'

const plugins = remote.require('../sync-scripts/plugins.js')

export const getReducers = plugins.getReducers
export const getSelectors = plugins.getSelectors
export const getKeymaps = plugins.getKeymaps
export const getComponents = plugins.getComponents
