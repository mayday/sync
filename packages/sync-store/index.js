import { createStore } from 'redux'
import middleware from './middleware'
import reducers from './reducers'

export function configureStore(initialState) {
  return createStore(reducers, initialState, middleware)
}

export { default as store } from './selectors'
