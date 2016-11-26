import { applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({ level: 'info', collapsed: true })

export default applyMiddleware(
  thunk,
  logger,
)
