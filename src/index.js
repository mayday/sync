import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from 'sync-store'
import App from './components/App'

const store = configureStore()

render(
  <Provider store={ store }>
    <App dispatch={ store.dispatch } />
  </Provider>,
  document.getElementById('root'),
)
