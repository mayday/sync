import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { CompactMedia, SmallIcon } from '../'
import { SidebarGroupItem } from './item'

export const SidebarGroup = ({ label, icon, items, statuses }) => {
  const styles = reactCSS({
    'default': {
      group: {
        color: '#666',
        marginTop: 10,
      },
      spacing: {
        height: 30,
        display: 'flex',
        alignItems: 'center',
      },
      label: {
        cursor: 'default',
      },
      items: {
        paddingLeft: 7,
        paddingRight: 7,
      },
    },
  })

  return (
    <div style={ styles.group }>
      <div style={ styles.spacing }>
        <CompactMedia center left={ <SmallIcon name={ icon } /> }>
          <div style={ styles.label }>{ label }</div>
        </CompactMedia>
      </div>

      <div style={ styles.items }>
        { _.map(items, (item, i) => {
          const repo = statuses[item.path] || {}
          return (
            <div key={ i } style={ styles.spacing }>
              <SidebarGroupItem
                name={ item.name }
                unstagedChanges={ repo.files && !!repo.files.length }
                localChanges={ repo.ahead > 0 }
              />
            </div>
          )
        }) }
      </div>
    </div>
  )
}
