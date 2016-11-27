import { combineReducers } from 'redux'

import git from 'sync-git'
import settings from 'sync-settings'
import ui from 'sync-ui'

export default combineReducers({
  git,
  settings,
  ui,
})
