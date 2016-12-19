import { combineReducers } from 'redux'
import { getReducers } from 'sync-plugins'

import git from 'sync-store-git'
import settings from 'sync-store-settings'
import ui from 'sync-store-ui'

const plugins = combineReducers(getReducers())

export default combineReducers({
  git,
  settings,
  ui,

  plugins,
})
