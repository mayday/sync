import React from 'react'
import reactCSS from 'reactcss'

export class Tooltip extends React.Component {
  state = {
    visible: false,
  }

  handleMouseOver = () => this.setState({ visible: true })
  handleMouseOut = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    const { children, label, hoverColor } = this.props

    const styles = reactCSS({
      'default': {
        wrap: {
          position: 'relative',
          cursor: 'pointer',
        },
        tooltip: {
          position: 'absolute',
          whiteSpace: 'nowrap',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, 5px) scaleY(0)',
          marginTop: 10,

          background: 'rgba(0, 0, 0, .7)',
          paddingLeft: 7,
          paddingRight: 7,
          height: 30,
          lineHeight: '30px',
          borderRadius: 4,
          color: '#bbb',
          fontSize: 15,

          opacity: 0,
          transition: 'opacity 100ms 1000ms ease-out',
        },
        body: {
          transition: 'color 100ms ease-out',
        },
      },
      'visible': {
        tooltip: {
          opacity: 1,
          transform: 'translate(-50%, 0) scaleY(1)',
        },
        body: {
          color: hoverColor,
        },
      },
    }, { visible })

    return (
      <div
        style={ styles.wrap }
        onMouseOver={ this.handleMouseOver }
        onMouseOut={ this.handleMouseOut }
      >
        <div style={ styles.tooltip }>{ label }</div>
        <div style={ styles.body }>
          { children }
        </div>
      </div>
    )
  }
}
