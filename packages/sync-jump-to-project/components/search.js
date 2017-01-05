import React from 'react'
import reactCSS from 'reactcss'

import { Card, Input } from 'sync-components'

export const Search = ({ visible, toggleVisibility }) => {
  const styles = reactCSS({
    'default': {
      wrap: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
      },
      bg: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(39, 36, 42, 0.6)',
      },
      box: {
        position: 'absolute',
        width: 400,
        left: '50%',
        marginLeft: -200,
        top: '40%',
      },
      inside: {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
      },
      input: {
        boxShadow: 'inset 0 0 0 2px #666',
        color: '#666',
        borderRadius: 2,
        height: 54,
        paddingLeft: 15,
        marginBottom: 15,
      },
    },
  })

  return visible ? (
    <div style={ styles.wrap }>
      <div style={ styles.bg } />
      <div style={ styles.box }>
        <Card lighter deeper>
          <div style={ styles.inside }>
            <Input
              style={ styles.input }
              placeholder="Search Projects"
              onBlur={ toggleVisibility }
              focusOnRender
            />
            Some Project Name
          </div>
        </Card>
      </div>
    </div>
  ) : null
}
