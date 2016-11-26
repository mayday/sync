import { scopeStateToSelectors } from 'redux-selector'

import { selectors as settings } from 'sync-settings'

export default scopeStateToSelectors({
  settings,
})
