import React from 'react'

export const Input = (props) => {
  const style = {
    border: 'none',
    padding: 0,
    outline: 'none',
    background: 'none',
    ...props.style,
  }
  return <input { ...props } style={ style } />
}
