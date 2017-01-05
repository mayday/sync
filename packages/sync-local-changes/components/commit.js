import React from 'react'
import reactCSS from 'reactcss'

import { Input } from 'sync-components'

export const Commit = ({ changeCount, message, onEditMessage }) => {
  const styles = reactCSS({
    'default': {
      input: {
        paddingLeft: 5,
        flex: 1,
        color: '#ddd',
      },
    },
  })

  return (
    <Input
      style={ styles.input }
      value={ message }
      onChange={ onEditMessage }
      placeholder={ `Changes (${ changeCount })...` }
    />
  )
}

Commit.defaultProps = {
  changeCount: 0,
}
