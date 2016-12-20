import { applyMiddleware } from 'redux'
import { getMiddlewares } from 'sync-plugins'

import createLogger from 'redux-logger'
import createGit from 'redux-git-middleware'
import thunk from 'redux-thunk'

const logger = createLogger({ level: 'info', collapsed: true })
const git = createGit({ path: 'ui.activeRepo' })

export default applyMiddleware(
  ...getMiddlewares(),
  thunk,
  git,
  logger,
)
