import React from 'react'
import _ from 'lodash'

const ENTER = 13
const ESC = 27

export class Input extends React.Component {
  componentDidMount() {
    if (this.props.focusOnRender) {
      this.input.focus()
    }
  }
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
        this.props.onEnter && this.props.onEnter(e)
      }

      if (e.keyCode === ESC) {
        this.props.onEscape && this.props.onEscape(e)
      }

      this.props.onKeyUp && this.props.onKeyUp(e)
    }

    return (
      <input
        { ..._.omit(this.props, ['onEnter', 'ref2', 'onEscape', 'focusOnRender']) }
        onKeyUp={ handleKeyUp }
        onChange={ handleChange }
        style={ style }
        ref={ this.props.ref2 || (input => (this.input = input)) }
      />
    )
  }
}
