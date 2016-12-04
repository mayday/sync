import React from 'react'
import reactCSS from 'reactcss'

import { Input, Media, SmallIcon } from 'sync-components'

export const LocalChangesCommit = ({ message, onChange, onCommit }) => {
  const styles = reactCSS({
    'default': {
      commit: {
        color: '#bbb',
      },
      input: {
        height: 44,
        marginTop: 5,
        marginBottom: 5,
        color: '#bbb',
        flex: 1,
        width: '100%',
      },
    },
  })
  return (
    <div style={ styles.commit }>
      <Media
        center
        spacing={ 54 }
        left={ <SmallIcon name="checkbox-marked" /> }
        right={ <div onClick={ onCommit }>COMMIT</div> }
      >
        <Input
          placeholder="Changes (2)…"
          value={ message }
          onChange={ onChange }
          onEnter={ onCommit }
          style={ styles.input }
        />
      </Media>
    </div>
  )
}
