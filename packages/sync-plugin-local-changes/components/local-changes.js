import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { Card } from 'sync-components'
import { Files } from './files'
import { Commit } from './commit'
import { ActionIcon } from './action-icon'

export const LocalChanges = ({ files, selectedFile, diff, onFileSelect,
  onToggleStaged, message, onEditMessage, onCommit }) => {
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
        display: 'flex',
        borderTop: '1px solid #222',
      },
      actions: {
        color: '#555',
        display: 'flex',
        alignItems: 'center',
        marginRight: 5,
      },
    },
  })

  const canCommit = !!message.length
  const handleCommit = () => onCommit(message, _.filter(files, { staged: true }))

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
          <Commit
            changeCount={ files.length }
            message={ message }
            onEditMessage={ onEditMessage }
          />
          <div style={ styles.actions }>
            <ActionIcon name="map-marker" />
            <ActionIcon name="timer" />
            <ActionIcon name="save" active={ canCommit } onClick={ canCommit && handleCommit } />
          </div>
        </div>
      </div>
    </Card>
  )
}
