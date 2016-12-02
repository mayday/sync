import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { Media } from '../'

export const LocalChangesDiff = ({ files, fileSelected }) => {
  const styles = reactCSS({
    'default': {
      diff: {
        color: '#bbb',
        paddingTop: 15,
        paddingBottom: 15,
      },
      content: {
        color: '#666',
      },
      del: {
        color: 'red',
      },
      add: {
        color: 'green',
      },
    },
  })

  const file = _.find(files, { to: fileSelected }) || {}
  return (
    <div style={ styles.diff }>
      { _.map(file.chunks, (chunk, i) => (
        <div key={ i }>
          <Media left={ <div /> }>
            <div style={ styles.content }>{ chunk.content }</div>
          </Media>
          { _.map(chunk.changes, (change, j) => {
            const leftLine = change.type === 'del' ? change.ln : change.ln1
            const rightLine = change.type === 'add' ? change.ln : change.ln2
            return (
              <Media key={ j } left={ <div>{ leftLine } - { rightLine }</div> }>
                <div style={ styles[change.type] }>
                  { change.content }
                </div>
              </Media>
            )
          }) }
        </div>
      )) }
    </div>
  )
}
