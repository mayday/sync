import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { Card } from 'sync-components'
import { Files } from './files'
import { Commit } from './commit'
import { ActionIcon } from './action-icon'

export const LocalChanges = ({ files, selectedFile, onFileSelect,
  onToggleStaged, message, onEditMessage, onCommit, onDiscardChanges }) => {
  const styles = reactCSS({
    'default': {
      wrap: {
        display: 'flex',
        position: 'relative',
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
      emptyCover: {
        background: 'rgba(50, 47, 53, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: 16,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 4,
      },
    },
  })

  const canCommit = !!message.length
  const stagedFilePaths = _(files).filter({ staged: true }).map('path').value()
  const handleCommit = () => onCommit(message, stagedFilePaths)

  return (
    <Card style={{ display: 'flex', flex: 1, minWidth: 0 }}>
      <div style={ styles.wrap }>
        { files.length === 0 ? (
          <div style={ styles.emptyCover }>No Local Changes</div>
        ) : null }
        <Files
          files={ files }
          selectedFile={ selectedFile }
          onSelect={ onFileSelect }
          onToggleStaged={ onToggleStaged }
          onDiscardChanges={ onDiscardChanges }
        />
        <div style={ styles.commit }>
          <Commit
            changeCount={ stagedFilePaths.length }
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
