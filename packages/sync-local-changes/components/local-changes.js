import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { Card, SmallIcon } from 'sync-components'
import { Files } from './files'
import { Commit } from './commit'
import { ActionIcon } from './action-icon'

export const LocalChanges = ({ files, selectedFile, onFileSelect,
  onToggleStaged, message, onEditMessage, onCommit, onDiscardChanges,
  onToggleAllFilesStaged }) => {
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
      selectAll: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        width: 30,
        color: '#666',
        cursor: 'pointer',
      },
    },
  })

  const stagedFilePaths = _(files).filter({ staged: true }).map('path').value()
  const canCommit = !!message.length && stagedFilePaths.length
  const handleCommit = () => canCommit && onCommit(message, stagedFilePaths)
  const handleSelectDeselectAll = () => onToggleAllFilesStaged(!stagedFilePaths.length)

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
          <div style={ styles.selectAll }>
            <SmallIcon
              name={ stagedFilePaths.length ? 'checkbox-marked' : 'checkbox-blank-outline' }
              onClick={ handleSelectDeselectAll }
            />
          </div>
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
