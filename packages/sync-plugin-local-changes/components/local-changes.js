import React from 'react'
import reactCSS from 'reactcss'

import { Card } from 'sync-components'
import { Files } from './files'

export const LocalChanges = ({ files, selectedFile, diff, onFileSelect,
  onToggleStaged }) => {
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
        borderTop: '1px solid #222',
      },
    },
  })

  return (
    <Card style={{ display: 'flex', flex: 1, minWidth: 0 }}>
      <div style={ styles.wrap }>
        <Files
          files={ files }
          diff={ diff }
          selected={ selectedFile }
          onSelect={ onFileSelect }
          onToggleStaged={ onToggleStaged }
        />
        <div style={ styles.commit }>
          commit message
        </div>
      </div>
    </Card>
  )
}
