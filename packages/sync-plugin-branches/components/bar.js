import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { Icon, Input, Media } from 'sync-components'
import { List } from './list'

export class Bar extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.listVisible === false && this.props.listVisible === true) {
      this.props.onRefresh()
      this.input.focus()
    }

    if (prevProps.listVisible === true && this.props.listVisible === false) {
      this.input.blur()
    }

    if (!_.find(this.props.branches, { name: this.props.active })) {
      const name = this.props.branches.length && this.props.branches[0].name
      if (name) {
        this.props.onSetActive(name)
      }
    }
  }
  render() {
    const { name, current, branches, onToggleList, onSearch, listVisible,
      search, onClear, onSelect, active, onSetActive } = this.props

    const styles = reactCSS({
      'default': {
        header: {
          color: '#666',
          cursor: 'default',
          display: 'flex',
          flexDirection: 'column',
          marginRight: 15,
          flex: 1,
        },
        input: {
          color: '#bbb',
          marginLeft: 5,
          flex: 1,
        },
        list: {
          marginBottom: 15,
          flex: 1,
          overflowY: 'auto',
        },
      },
    })

    const UP = 38
    const DOWN = 40

    const handleEnter = () => onSelect(active)
    const handleKeyDown = (e) => {
      const index = _.findIndex(this.props.branches, { name: this.props.active })
      if (e.keyCode === UP) {
        const prev = branches[index - 1]
        if (prev) {
          onSetActive(prev.name)
        }
      }
      if (e.keyCode === DOWN) {
        const next = branches[index + 1]
        if (next) {
          onSetActive(next.name)
        }
      }
    }

    return (
      <div style={ styles.header }>
        <div>
          <Media
            style={{ height: 54 }}
            center
            spacing={ 54 }
            left={ name ? <Icon name="source-branch" onClick={ onToggleList } /> : null }
          >
            { name ? (
              <div style={{ display: 'flex' }}>
                { name } /
                <Input
                  style={ styles.input }
                  placeholder={ current }
                  value={ search }
                  onChange={ onSearch }
                  onEscape={ onClear }
                  onEnter={ handleEnter }
                  onKeyDown={ handleKeyDown }
                  // onBlur={ onClear }
                  onFocus={ listVisible === false && onToggleList }
                  ref2={ input => this.input = input }
                />
              </div>
            ) : null }
          </Media>
        </div>

        { listVisible ? (
          <div style={ styles.list }>
            <List
              name={ name }
              active={ active }
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
