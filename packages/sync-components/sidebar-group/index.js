import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { CompactMedia, SmallIcon } from '../'

export const SidebarGroup = ({ label, icon, items }) => {
  const styles = reactCSS({
    'default': {
      group: {
        opacity: 0.8,
        color: '#666',
        marginTop: 10,
      },
      spacing: {
        height: 30,
        display: 'flex',
        alignItems: 'center',
      },
      items: {
        paddingLeft: 15,
        paddingRight: 15,
      },
      item: {
        color: '#bbb',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        paddingRight: 5,
        boxSizing: 'border-box',
      },
    },
  })

  return (
    <div style={ styles.group }>
      <div style={ styles.spacing }>
        <CompactMedia center left={ <SmallIcon name={ icon } /> }>
          { label }
        </CompactMedia>
      </div>

      <div style={ styles.items }>
        { _.map(items, (item, i) => (
          <div key={ i } style={ styles.spacing }>
            <div style={ styles.item }>
              { item.name }
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}
