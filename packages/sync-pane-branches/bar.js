import React from 'react'
import reactCSS from 'reactcss'

import { Icon, Input, Media } from 'sync-components'
import { List } from './list'

export const Bar = ({ name, current, branches, onToggleList, onSearch,
  listVisible, search }) => {
  const styles = reactCSS({
    'default': {
      header: {
        color: '#666',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
      },
      input: {
        color: '#bbb',
        marginLeft: 5,
      },
    },
  })

  return (
    <div style={ styles.header }>
      <Media
        style={{ height: 54 }}
        center
        spacing={ 54 }
        left={ name ? <Icon name="source-branch" onClick={ onToggleList } /> : null }
      >
        { name ? (
          <div>
            { name } /
            <Input
              style={ styles.input }
              placeholder={ current }
              value={ search }
              onChange={ onSearch }
              onFocus={ onToggleList }
            />
          </div>
        ) : null }
      </Media>

      { listVisible ? (
        <List
          name={ name }
          current={ current }
          branches={ branches }
        />
      ) : null }
    </div>
  )
}
