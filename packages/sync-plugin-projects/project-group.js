import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { CompactMedia, SmallIcon } from 'sync-components'
import { ProjectItem } from './project-item'

export const ProjectGroup = ({ label, icon, items, onSelect, activeRepo }) => {
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
          return (
            <div key={ i } style={ styles.spacing }>
              <ProjectItem
                path={ item.path }
                name={ item.name }
                active={ item.path === activeRepo }
                onSelect={ onSelect }
              />
            </div>
          )
        }) }
      </div>
    </div>
  )
}
