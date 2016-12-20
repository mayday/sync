import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { Scroll } from 'sync-components'
import { File } from './file'

export const Files = ({ files, selectedFile, onSelect, onToggleStaged }) => {
  const styles = reactCSS({
    'default': {
      changes: {
        flex: 1,
        display: 'flex',
        minWidth: 0,
      },
      files: {
        width: 170,
        display: 'flex',
        borderRight: '1px solid #222',
        padding: 10,
      },
      diff: {
        flex: 1,
        display: 'flex',
        minWidth: 0,
      },
    },
  })

  return (
    <div style={ styles.changes }>
      <div style={ styles.files }>
        <Scroll>
          { _.map(files, (file, i) => (
            <File
              key={ i }
              { ...file }
              active={ file.path === selectedFile.path }
              onSelect={ onSelect }
              onToggleStaged={ onToggleStaged }
            />
          )) }
        </Scroll>
      </div>
      <div style={ styles.diff }>
        <Scroll x>
          { selectedFile.diff }
        </Scroll>
      </div>
    </div>
  )
}
