import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'

const configureStore = () => createStore(() => {})

render(
  <Provider store={ configureStore() }>
    <BrowserRouter>
      <div>Sync</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
