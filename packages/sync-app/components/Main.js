import React from 'react'
import reactCSS from 'reactcss'

import LocalChangesPlugin from 'sync-plugin-local-changes'

import { Scroll } from 'sync-components'

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
      },
      changes: {
        marginBottom: 15,
        maxHeight: '78vh',
        display: 'flex',
      },
    },
  })

  return (
    <Scroll scrollToBottom style={{ display: 'flex' }}>
      <div style={ styles.main }>
        <LocalChangesPlugin />
      </div>
    </Scroll>
  )
}

export default Main
