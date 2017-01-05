import { scopeStateToSelectors } from 'redux-selector'
import { getSelectors } from 'sync-plugins'

import { selectors as git } from 'sync-store-git'

const plugins = scopeStateToSelectors(getSelectors())

export const store = scopeStateToSelectors({
  git,
  plugins,
})
