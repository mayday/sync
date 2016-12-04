import React from 'react'
import reactCSS from 'reactcss'
import { trimPath } from './helper'

import { CompactMedia, SmallIcon } from '../'

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
    <div style={ styles.file } onClick={ handleClick }>
      <CompactMedia left={ <SmallIcon name="checkbox-marked" /> }>
        { trimPath(path) }
      </CompactMedia>
    </div>
  )
}
