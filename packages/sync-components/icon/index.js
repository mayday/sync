import React from 'react'
import reactCSS from 'reactcss'

import icons, { missing } from './icons'

export const Icon = ({ name, size = 24, path, onClick }) => {
  const styles = reactCSS({
    'default': {
      svg: {
        display: 'block',
        width: size,
        height: size,
      },
      path: {
        fill: 'currentColor',
      },
    },
  })

  return (
    <svg style={ styles.svg } viewBox="0 0 24 24" onClick={ onClick }>
      <path style={ styles.path } d={ path || icons[name] || missing } />
    </svg>
  )
}

export default Icon

export const SmallIcon = props => <Icon { ...props } size={ 18 } />
