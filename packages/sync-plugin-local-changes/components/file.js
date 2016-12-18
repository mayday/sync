import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { CompactMedia, SmallIcon } from 'sync-components'

export const File = handleHover(({ path, active, hover, staged, onSelect,
  onToggleStaged }) => {
  const styles = reactCSS({
    'default': {
      file: {
        color: 'rgba(212, 225, 87, 0.5)',
        cursor: 'pointer',
        padding: 5,
        transition: 'color 100ms ease-out',
      },
    },
    'active': {
      file: {
        color: 'rgba(212, 225, 87, 1)',
      },
    },
    'hover': {
      file: {
        color: 'rgba(212, 225, 87, 0.75)',
      },
    },
  }, { hover, active })

  const handleClick = () => onSelect(path)
  const handleIconClick = () => onToggleStaged(path)

  const icon = (
    <SmallIcon
      name={ staged ? 'checkbox-marked' : 'checkbox-blank-outline' }
      onClick={ handleIconClick }
    />
  )

  return (
    <CompactMedia style={ styles.file } left={ icon }>
      <span onClick={ handleClick }>{ path }</span>
    </CompactMedia>
  )
})
