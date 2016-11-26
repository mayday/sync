import { applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createGit from 'redux-git-middleware'
import thunk from 'redux-thunk'

const logger = createLogger({ level: 'info', collapsed: true })
const git = createGit()

export default applyMiddleware(
  thunk,
  git,
  logger,
)
