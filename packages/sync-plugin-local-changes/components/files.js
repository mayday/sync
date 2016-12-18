import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { Scroll } from 'sync-components'

export const Files = ({ files }) => {
  const styles = reactCSS({
    'default': {
      changes: {
        flex: 1,
        display: 'flex',
        minWidth: 0,
      },
      files: {
        width: 200,
        display: 'flex',
        borderRight: '1px solid #222',
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
            <div key={ i }>{ file.path }</div>
          )) }
        </Scroll>
      </div>
      <div style={ styles.diff }>
        <Scroll x>
          diff
        </Scroll>
      </div>
    </div>
  )
}
