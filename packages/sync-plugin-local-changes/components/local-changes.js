import React from 'react'
import reactCSS from 'reactcss'

import { Card } from 'sync-components'
import { Files } from './files'

export const LocalChanges = ({ files, fileSelected, onFileSelect }) => {
  const styles = reactCSS({
    'default': {
      wrap: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        flex: 1,
      },
      commit: {
        height: 54,
        borderBottom: '1px solid #222',
      },
    },
  })

  return (
    <Card style={{ display: 'flex', flex: 1, minWidth: 0 }}>
      <div style={ styles.wrap }>
        <div style={ styles.commit }>
          commit message
        </div>

        <Files
          files={ files }
          selected={ fileSelected }
          onSelect={ onFileSelect }
        />
      </div>
    </Card>
  )
}
