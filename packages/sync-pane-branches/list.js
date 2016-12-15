import React from 'react'
import _ from 'lodash'

import { ListItem } from './list-item'

export const List = ({ name, branches, onSelect, active }) => {
  return (
    <div>
      { _.map(branches, branch => (
        <ListItem
          key={ branch.name }
          project={ name }
          name={ branch.name }
          active={ branch.name === active }
          search={ branch.search }
          onSelect={ onSelect }
        />
      )) }
    </div>
  )
}
