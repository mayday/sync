import React from 'react'
import reactCSS from 'reactcss'

export const File = ({ path, selected, onSelect }) => {
  const styles = reactCSS({
    'default': {
      file: {
        fontSize: 14,
        color: '#D4E157',
        opacity: 0.6,
        marginBottom: 10,
      },
    },
    'selected': {
      file: {
        opacity: 1,
      },
    },
  }, { selected })

  const handleClick = () => onSelect(path)

  return (
    <div style={ styles.file } onClick={ handleClick }>{ path }</div>
  )
}
