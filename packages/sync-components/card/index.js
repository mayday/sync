import React from 'react'
import reactCSS from 'reactcss'

export const Card = ({ children }) => {
  const styles = reactCSS({
    'default': {
      card: {
        backgroundColor: 'rgba(50, 47, 53, 1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.24)',
        borderRadius: 4,
      },
    },
  })

  return (
    <div style={ styles.card }>
      { children }
    </div>
  )
}
