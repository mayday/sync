import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from 'sync-store'
import App from './components/App'
import { getSettings } from '../electron/store'

const store = configureStore({ settings: getSettings() })

render(
  <Provider store={ store }>
    <App dispatch={ store.dispatch } />
  </Provider>,
  document.getElementById('root'),
)
