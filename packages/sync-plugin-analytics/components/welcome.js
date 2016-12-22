import React from 'react'
import reactCSS from 'reactcss'

import { Input } from 'sync-components'
import { localNameKey, localEmailKey } from '../'

export class AnalyticsWelcome extends React.Component {
  state = {
    focused: false,
    filledIn: localStorage.getItem(localNameKey),
  }

  componentDidMount() {
    this.props.onLoad().then(({ email }) => {
      localStorage.setItem(localEmailKey, email)
    })
  }

  handleFocus = () => this.setState({ focused: true })
  handleBlur = () => this.setState({ focused: false })
  handleEnter = (e) => {
    localStorage.setItem(localNameKey, e.target.value)
    this.setState({ filledIn: true })
  }

  render() {
    const styles = reactCSS({
      'default': {
        wrap: {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'rgba(39, 36, 42, 0.9)',
          zIndex: 9000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          color: '#666',
          fontSize: 32,
          paddingBottom: 40,
        },
        copy: {
          color: '#eee',
          fontSize: 32,
          paddingBottom: 40,

        },
        input: {
          boxShadow: '0 0 0 1px #666',
          borderRadius: 2,
          height: 44,
          paddingLeft: 10,
          width: 140,
          color: '#bbb',
          transition: 'box-shadow 100ms ease-out',
        },
        followup: {
          color: '#666',
          fontSize: 14,
          marginTop: 10,
        },
      },
      'active': {
        input: {
          boxShadow: '0 0 0 2px rgba(212, 225, 87, 1)',
          color: 'rgba(212, 225, 87, 1)',
        },
      },
    }, { active: this.state.focused })

    return this.state.filledIn ? null : (
      <div style={ styles.wrap }>
        <div style={ styles.title }>Sync</div>
        <div style={ styles.copy }>Thanks for checking this out 🐬</div>
        <Input
          style={ styles.input }
          placeholder="Your Name..."
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onEnter={ this.handleEnter }
        />
        <div style={ styles.followup }>(So I Can Say Thanks)</div>
      </div>
    )
  }
}
