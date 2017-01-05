import React from 'react'
// import _ from 'lodash'
import reactCSS from 'reactcss'

import { registerEvents } from 'sync-window'
// import { getUIByContext } from 'sync-plugins'

import Header from './Header'
import Main from './Main'

// const components = getComponents()
const ProjectPlugin = require('../../sync-projects').default
const JumpToProjectPlugin = require('../../sync-jump-to-project').default
const AnalyticsPlugin = require('../../sync-analytics').default

export class App extends React.Component { // eslint-disable-line
  componentDidMount() {
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

    // const rootPlugins = getUIByContext('body')

    return (
      <div style={ styles.app }>
        { /* _.map(rootPlugins, (plugin, i) => (
          <plugin.component key={ i } />
        )) */ }
        <AnalyticsPlugin />
        <JumpToProjectPlugin />
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

export default App
