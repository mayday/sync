import { combineReducers } from 'redux'

import git from 'sync-store-git'
import settings from 'sync-store-settings'
import ui from 'sync-store-ui'

import { reducer as syncPluginBranches } from 'sync-plugin-branches'
import { reducer as syncPluginJumpToProject } from 'sync-plugin-jump-to-project'

const plugin = combineReducers({
  'sync-plugin-branches': syncPluginBranches,
  'sync-plugin-jump-to-project': syncPluginJumpToProject,
})

export default combineReducers({
  git,
  settings,
  ui,

  plugin,
})
