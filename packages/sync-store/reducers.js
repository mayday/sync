import { combineReducers } from 'redux'
import { getReducers } from 'sync-plugins'

import git from 'sync-store-git'

const plugins = combineReducers(getReducers())

export default combineReducers({
  git,
  plugins,
})
