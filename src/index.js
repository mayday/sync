import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { configureStore } from 'sync-store'

render(
  <Provider store={ configureStore() }>
    <BrowserRouter>
      <div>Sync</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
