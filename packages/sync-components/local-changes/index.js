import React from 'react'
import reactCSS from 'reactcss'

import { Card, Scroll } from 'sync-components'
import { LocalChangesFiles } from './files'

export const LocalChanges = ({ files, diff }) => {
  const styles = reactCSS({
    'default': {
      wrap: {
        display: 'flex',
        flexDirection: 'column',
      },
      commit: {
        height: 54,
        borderBottom: '1px solid #222',
      },
      changes: {
        flex: 1,
        display: 'flex',
      },
      files: {
        width: 200,
        display: 'flex',
        borderRight: '1px solid #222',
      },
      diff: {
        flex: 1,
        display: 'flex',
      },
    },
  })

  return (
    <Card style={{ display: 'flex' }}>
      <div style={ styles.wrap }>
        <div style={ styles.commit }>
          commit
        </div>
        <div style={ styles.changes }>
          <div style={ styles.files }>
            <Scroll>
              <LocalChangesFiles files={ files } />
            </Scroll>
          </div>
          <div style={ styles.diff }>
            <Scroll>
              { diff }
            </Scroll>
          </div>
        </div>
      </div>
    </Card>
  )
}
