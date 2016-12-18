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
        marginLeft: 5,
      },
      changes: {
        marginBottom: 15,
        maxHeight: '78vh',
        display: 'flex',
      },
    },
  })

  return (
    <Scroll scrollToBottom>
      <div style={ styles.main }>
        <LocalChangesPlugin />
      </div>
    </Scroll>
  )
}

export default Main
