import { applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

const logger = createLogger({ level: 'info', collapsed: true })

export default applyMiddleware(
  logger,
)
