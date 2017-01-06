import React from 'react'
import reactCSS from 'reactcss'
// import { getComponents } from 'sync-plugins'

import { Scroll } from 'sync-components'

// const components = getComponents()
const LocalChangesPlugin = require('../../sync-local-changes').default
const CommitsPlugin = require('../../sync-commits').default

export const Main = ({ active }) => {
  const styles = reactCSS({
    'default': {
      main: {
        marginTop: 15,
        marginRight: 15,
        marginBottom: 15,
        marginLeft: 5,
        flex: 1,
        display: 'flex',
        minWidth: 0,
      },
    },
  })

  // TODO: Make this a loop, not hard coded
  const Component = {
    'sync-local-changes': LocalChangesPlugin,
    'sync-commits': CommitsPlugin,
  }[active]

  return (
    <Scroll scrollToBottom style={{ display: 'flex' }}>
      <div style={ styles.main }>
        <Component />
      </div>
    </Scroll>
  )
}

export default Main
