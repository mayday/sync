import React from 'react'
import _ from 'lodash'

const ENTER = 13
const ESC = 27

export class Input extends React.Component {
  render() {
    const style = {
      border: 'none',
      padding: 0,
      outline: 'none',
      background: 'none',
      ...this.props.style,
    }

    const handleChange = (e) => {
      this.props.onChange && this.props.onChange(e.target.value, e)
    }

    const handleKeyUp = (e) => {
      if (e.keyCode === ENTER) {
        this.props.onEnter && this.props.onEnter()
      }

      if (e.keyCode === ESC) {
        this.props.onEscape && this.props.onEscape()
      }

      this.props.onKeyUp && this.props.onKeyUp(e)
    }

    return (
      <input
        { ..._.omit(this.props, ['onEnter', 'ref2', 'onEscape']) }
        onKeyUp={ handleKeyUp }
        onChange={ handleChange }
        style={ style }
        ref={ this.props.ref2 }
      />
    )
  }
}
