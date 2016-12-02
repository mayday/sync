import React from 'react'

export class Scroll extends React.Component {
  componentWillUpdate() {
    this.shouldScrollBottom = this.wrap.scrollTop +
      this.wrap.offsetHeight === this.wrap.scrollHeight
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom && this.props.scrollToBottom) {
      this.wrap.scrollTop = this.wrap.scrollHeight
    }
  }
  render() {
    const style = {
      overflowY: 'auto',
      overflowX: this.props.x ? 'auto' : 'visible',
      flex: 1,
    }
    return (
      <div style={ style } ref={ el => this.wrap = el }>
        { this.props.children }
      </div>
    )
  }
}
