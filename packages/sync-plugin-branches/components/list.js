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
          { ...branch }
          active={ branch.name === active }
          onSelect={ onSelect }
        />
      )) }
    </div>
  )
}
