import { scopeStateToSelectors } from 'redux-selector'

import { selectors as settings } from 'sync-settings'
import { selectors as ui } from 'sync-ui'

export default scopeStateToSelectors({
  settings,
  ui,
})
