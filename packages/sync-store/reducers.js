import { combineReducers } from 'redux'

import git from 'sync-store-git'
import settings from 'sync-store-settings'
import ui from 'sync-store-ui'

export default combineReducers({
  git,
  settings,
  ui,
})
