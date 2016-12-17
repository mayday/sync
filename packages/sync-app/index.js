import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from 'sync-store'
// import { getSettings } from 'sync-electron'
import App from './components/App'

const store = configureStore({ settings: {} })

render(
  <Provider store={ store }>
    <App store={ store } />
  </Provider>,
  document.getElementById('root'),
)
