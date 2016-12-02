import React from 'react'
import reactCSS from 'reactcss'
import moment from 'moment'
import { parseMessageText } from './helper'

import { Card, Icon, Media } from '../'

export const Commit = ({ message, author, date, local, position }) => {
  const styles = reactCSS({
    'default': {
      commit: {
        paddingTop: 15,
        paddingBottom: 15,
      },
      title: {
        color: '#aaa',
        userSelect: 'text',
      },
      subtitle: {
        color: '#555',
        fontSize: 14,
        cursor: 'default',
      },
      icon: {
        color: '#666',
      },
      more: {
        color: '#666',
      },
      count: {
        color: '#555',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      },
      number: {
        marginRight: 5,
        cursor: 'pointer',
      },
    },
    'local': {
      icon: {
        color: '#D4E157',
      },
    },
  }, { local })

  const iconPosition = {
    'first': 'source-commit-start',
    'middle': 'source-commit',
    'last': 'source-commit-end',
  }[position]

  // const icon = local ? `${ iconPosition }-local` : iconPosition

  return (
    <Card>
      <div style={ styles.commit }>
        <Media
          spacing={ 54 }
          center
          left={ <div style={ styles.icon }><Icon name={ iconPosition } /></div> }
          right={ <div style={ styles.more }><Icon name="dots-vertical" /></div> }
        >
          <div style={ styles.title }>{ parseMessageText(message) }</div>
          <div style={ styles.subtitle }>{ moment(new Date(date)).fromNow() } by { author }</div>
        </Media>
      </div>
    </Card>
  )
}
