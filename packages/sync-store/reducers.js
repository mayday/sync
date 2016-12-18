import { combineReducers } from 'redux'

import git from 'sync-store-git'
import settings from 'sync-store-settings'
import ui from 'sync-store-ui'

import { reducer as syncPluginBranches } from 'sync-plugin-branches'
import { reducer as syncPluginCommits } from 'sync-plugin-commits'
import { reducer as syncPluginJumpToProject } from 'sync-plugin-jump-to-project'
import { reducer as syncPluginLocalChanges } from 'sync-plugin-local-changes'
import { reducer as syncPluginProjects } from 'sync-plugin-projects'

const plugin = combineReducers({
  'sync-plugin-branches': syncPluginBranches,
  'sync-plugin-commits': syncPluginCommits,
  'sync-plugin-jump-to-project': syncPluginJumpToProject,
  'sync-plugin-local-changes': syncPluginLocalChanges,
  'sync-plugin-projects': syncPluginProjects,
})

export default combineReducers({
  git,
  settings,
  ui,

  plugin,
})
