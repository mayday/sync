import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { configureStore } from 'sync-store'
import App from './App'

const store = configureStore()

render(
  <Provider store={ store }>
    <BrowserRouter>
      <App dispatch={ store.dispatch } />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
