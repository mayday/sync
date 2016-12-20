import React from 'react'
import reactCSS from 'reactcss'

import { Media } from 'sync-components'

export const Code = ({ beforeLineNumber, currentLineNumber, type, content }) => {
  const styles = reactCSS({
    'default': {
      numbers: {
        display: 'flex',
        color: '#666',
        fontSize: 14,
      },
      number: {
        flex: 1,
      },
      pre: {
        margin: 0,
        userSelect: 'text',
        fontSize: 15,
      },
    },
    'add': {
      line: {
        background: 'rgba(126, 211, 33, 0.1)',
      },
      pre: {
        color: '#81B150',
      },
    },
    'del': {
      line: {
        background: 'rgba(208, 2, 27, 0.1)',
      },
      pre: {
        color: '#B72B40',
      },
    },
  }, { add: type === 'add', del: type === 'del' })

  const LineNumbers = ({ before, current }) => {
    return (
      <div style={ styles.numbers }>
        <div style={ styles.number }>
          { before }
        </div>

        <div style={ styles.number }>
          { current }
        </div>
      </div>
    )
  }

  return (
    <div style={ styles.line }>
      <Media
        left={ <LineNumbers before={ beforeLineNumber } current={ currentLineNumber } /> }
      >
        <pre style={ styles.pre }>
          { content }
        </pre>
      </Media>
    </div>
  )
}
