import React from 'react'
import reactCSS from 'reactcss'

import icons, { missing } from './icons'

export const Icon = ({ name, size = 24 }) => {
  const styles = reactCSS({
    'default': {
      svg: {
        width: size,
        height: size,
      },
      path: {
        fill: 'currentColor',
      },
    },
  })

  return (
    <svg style={ styles.svg } viewBox="0 0 24 24">
      <path style={ styles.path } d={ icons[name] || missing } />
    </svg>
  )
}

export default Icon

export const SmallIcon = ({ name }) => <Icon name={ name } size={ 18 } />
