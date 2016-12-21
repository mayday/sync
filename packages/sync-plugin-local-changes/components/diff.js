import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { Media } from 'sync-components'
import { Code } from './code'

export const Diff = ({ chunks }) => {
  const styles = reactCSS({
    'default': {
      diff: {
        color: '#bbb',
        paddingTop: 15,
        paddingBottom: 15,
        width: 600,
      },
      content: {
        color: '#666',
      },
    },
  })

  return (
    <div style={ styles.diff }>
      { _.map(chunks, (chunk, i) => (
        <div key={ i }>
          <Media left={ <div /> }>
            <div style={ styles.content }>{ chunk.content }</div>
          </Media>
          { _.map(chunk.changes, (change, j) => {
            const leftLine = change.type === 'del' ? change.ln : change.ln1
            const rightLine = change.type === 'add' ? change.ln : change.ln2
            return (
              <Code
                key={ j }
                beforeLineNumber={ leftLine }
                currentLineNumber={ rightLine }
                type={ change.type }
                content={ change.content.substring(1) }
              />
            )
          }) }
        </div>
      )) }
    </div>
  )
}

Diff.defaultProps = {
  chunks: [],
}
