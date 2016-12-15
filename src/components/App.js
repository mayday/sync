import React from 'react'
import reactCSS from 'reactcss'

import { connect } from 'react-redux'
import { actions as gitActions } from 'sync-store-git'
import { actions as settingsActions } from 'sync-store-settings'
import { actions as uiActions } from 'sync-store-ui'
import { store } from 'sync-store'
import { registerEvents } from 'sync-window'

import ProjectPlugin from 'sync-plugin-projects'

import Header from './Header'
import Main from './Main'

export class App extends React.Component { // eslint-disable-line
  componentDidMount() {
    this.props.gitReposStatus(this.props.repos)
    registerEvents(window, this.props.store)
  }
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
          userSelect: 'none',
        },
        header: {
          display: 'flex',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(39, 36, 42, 0.95)',
          zIndex: 2,
          maxHeight: '100%',
        },
        headerSpacing: {
          paddingTop: 54,
          flex: 1,
          maxWidth: '100%',
          display: 'flex',
        },
        sidebar: {
          width: 150 - 5,
          display: 'flex',
          overflowY: 'auto',
          flexShrink: 0,
        },
        main: {
          flex: 1,
          display: 'flex',
          minWidth: 0,
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
            <ProjectPlugin />
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

export default connect(
  state => ({
    repos: store.getRepos(state),
    activeRepo: store.getActiveRepo(state),
  }),
  { ...gitActions, ...settingsActions, ...uiActions },
)(App)
