import React from 'react'
import reactCSS from 'reactcss'

import { Media } from '../'

export const HeaderDropdownItem = ({ prefix, search, name, onSelect }) => {
  const styles = reactCSS({
    'default': {
      highlight: {
        color: '#bbb',
      },
      item: {
        fontSize: 16,
        color: '#666',
        height: 54,
        display: 'flex',
        alignItems: 'center',
      },
    },
  })

  const handleClick = () => onSelect(name)

  const index = name.indexOf(search)
  const before = name.slice(0, index)
  const match = name.slice(index, index + search.length)
  const after = name.slice(index + search.length, name.length)
  return (
    <Media spacing={ 54 } left>
      <div style={ styles.item } onClick={ handleClick }>
        { prefix } / { before }
        <span style={ styles.highlight }>{ match }</span>
        { after }
      </div>
    </Media>
  )
}
