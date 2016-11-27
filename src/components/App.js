import React from 'react'
import reactCSS from 'reactcss'

import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

export class App extends React.Component { // eslint-disable-line
  render() {
    const styles = reactCSS({
      'default': {
        app: {
          display: 'flex',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(39, 36, 42, 1)',
          fontFamily: 'Roboto',
          WebkitFontSmoothing: 'antialiased',
          fontSize: 16,
        },
        header: {
          display: 'flex',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: 54,
          backgroundColor: 'rgba(39, 36, 42, 0.97)',
          zIndex: 2,
        },
        headerSpacing: {
          paddingTop: 54,
          flex: 1,
          maxWidth: '100%',
        },
        sidebar: {
          width: 180,
          display: 'flex',
          overflowY: 'auto',
        },
        main: {
          flex: 1,
          display: 'flex',
          overflowY: 'auto',
        },
      },
    })
    return (
      <div style={ styles.app }>
        <div style={ styles.header }>
          <Header />
        </div>
        <div style={ styles.sidebar }>
          <div style={ styles.headerSpacing }>
            <Sidebar />
          </div>
        </div>
        <div style={ styles.main }>
          <div style={ styles.headerSpacing }>
            <Main />
          </div>
        </div>
      </div>
    )
  }
}

export default App
