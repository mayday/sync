import React from 'react'
import _ from 'lodash'

import { ListItem } from './list-item'

export const List = ({ name, current, branches, onSelect }) => {
  return (
    <div>
      { _.map(branches, branch => (
        <ListItem
          key={ branch.name }
          project={ name }
          name={ branch.name }
          active={ branch.name === current }
          search={ branch.search }
          onSelect={ onSelect }
        />
      )) }
    </div>
  )
}
