import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from 'sync-store'
import Root from './Root'

const store = configureStore()

render(
  <Provider store={ store }>
    <Root store={ store } />
  </Provider>,
  document.getElementById('root'),
)
