import React from 'react'
import reactCSS from 'reactcss'
// import { getComponents } from 'sync-plugins'

import { Scroll } from 'sync-components'

// const components = getComponents()
// const LocalChangesPlugin = require('../../sync-local-changes').default
const CommitsPlugin = require('../../sync-commits').default

export const Main = () => {
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

  return (
    <Scroll scrollToBottom style={{ display: 'flex' }}>
      <div style={ styles.main }>
        <CommitsPlugin />
      </div>
    </Scroll>
  )
}

export default Main
