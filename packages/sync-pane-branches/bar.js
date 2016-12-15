import React from 'react'
import reactCSS from 'reactcss'

import { Icon, Input, Media } from 'sync-components'
import { List } from './list'

export class Bar extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.listVisible === false && this.props.listVisible === true) {
      this.input.focus()
    }
  }
  render() {
    const { name, current, branches, onToggleList, onSearch, listVisible,
      search, onClear, onSelect } = this.props

    const styles = reactCSS({
      'default': {
        header: {
          color: '#666',
          cursor: 'default',
          display: 'flex',
          flexDirection: 'column',
          marginRight: 15,
        },
        input: {
          color: '#bbb',
          marginLeft: 5,
        },
        list: {
          marginBottom: 15,
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
                onEscape={ onClear }
                // onBlur={ onClear }
                onFocus={ listVisible === false && onToggleList }
                ref2={ input => this.input = input }
              />
            </div>
          ) : null }
        </Media>

        { listVisible ? (
          <div style={ styles.list }>
            <List
              name={ name }
              current={ current }
              branches={ branches }
              onSelect={ onSelect }
            />
          </div>
        ) : null }
      </div>
    )
  }
}
