import React from 'react'
import reactCSS, { handleHover } from 'reactcss'
import { remote } from 'electron'

import { CompactMedia, SmallIcon } from 'sync-components'

export const File = handleHover(({ path, active, hover, staged, onSelect,
  onToggleStaged, onDiscardChanges }) => {
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
  const handleDiscardChanges = () => onDiscardChanges(path)

  const { Menu, MenuItem } = remote
  const menu = new Menu()
  menu.append(new MenuItem({
    label: 'Discard Changes',
    click: handleDiscardChanges,
  }))

  const handleMenu = (e) => {
    e.preventDefault()
    menu.popup(e.clientX, e.clientY)
  }

  const icon = (
    <SmallIcon
      name={ staged ? 'checkbox-marked' : 'checkbox-blank-outline' }
      onClick={ handleIconClick }
    />
  )

  return (
    <CompactMedia style={ styles.file } left={ icon }>
      <span onClick={ handleClick } onContextMenu={ handleMenu }>{ path }</span>
    </CompactMedia>
  )
})
