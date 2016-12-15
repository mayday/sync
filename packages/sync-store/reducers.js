import { combineReducers } from 'redux'

import git from 'sync-store-git'
import settings from 'sync-store-settings'
import ui from 'sync-store-ui'

import { reducer as syncPaneBranches } from 'sync-pane-branches'

const pane = combineReducers({
  'sync-pane-branches': syncPaneBranches,
})

export default combineReducers({
  git,
  settings,
  ui,

  pane,
})
