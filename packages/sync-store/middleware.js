import { applyMiddleware } from 'redux'
// import { getMiddlewares } from 'sync-plugins'

import createLogger from 'redux-logger'
import createGit from 'redux-git-middleware'
import thunk from 'redux-thunk'

// HAX
const AnalyticsMiddleware = require('../sync-analytics').middleware

const logger = createLogger({ level: 'info', collapsed: true })
const git = createGit({ path: 'ui.activeRepo' })

export default applyMiddleware(
  thunk,
  git,
  // ...getMiddlewares(),
  // HAX
  AnalyticsMiddleware,
  logger,
)
