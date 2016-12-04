import React from 'react'
import _ from 'lodash'

const ENTER = 13

export const Input = (props) => {
  const style = {
    border: 'none',
    padding: 0,
    outline: 'none',
    background: 'none',
    ...props.style,
  }

  const handleChange = (e) => {
    props.onChange && props.onChange(e.target.value, e)
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === ENTER) {
      props.onEnter && props.onEnter()
    }
    props.onKeyUp && props.onKeyUp(e)
  }

  return (
    <input
      { ..._.omit(props, ['onEnter']) }
      onKeyUp={ handleKeyUp }
      onChange={ handleChange }
      style={ style }
    />
  )
}
