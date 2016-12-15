import { combineReducers } from 'redux'

import git from 'sync-store-git'
import settings from 'sync-store-settings'
import ui from 'sync-store-ui'

import { reducer as syncPluginBranches } from 'sync-plugin-branches'

const plugin = combineReducers({
  'sync-plugin-branches': syncPluginBranches,
})

export default combineReducers({
  git,
  settings,
  ui,

  plugin,
})
