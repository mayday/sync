import React from 'react'
import reactCSS from 'reactcss'
import moment from 'moment'

import { Card, Icon, Media } from '../'

export const Commit = ({ message, author, date, filesChanged }) => {
  const styles = reactCSS({
    'default': {
      commit: {
        paddingTop: 15,
        paddingBottom: 15,
      },
      title: {
        color: '#aaa',
      },
      subtitle: {
        color: '#555',
        fontSize: 14,
      },
      avatar: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#555',
        background: 'url("https://avatars2.githubusercontent.com/u/4633636?v=3&s=460")',
        backgroundSize: 'cover',
      },
      count: {
        color: '#555',
        display: 'flex',
        alignItems: 'center',
      },
      number: {
        marginRight: 5,
      },
    },
  })

  const count = filesChanged !== 1 ? (
    <div style={ styles.count }>
      <div style={ styles.number }>{ filesChanged }</div>
      <Icon name="unfold-more" />
    </div>
  ) : null

  return (
    <Card>
      <div style={ styles.commit }>
        <Media center left={ <div style={ styles.avatar } /> } right={ count }>
          <div style={ styles.title }>{ message }</div>
          <div style={ styles.subtitle }>{ moment(new Date(date)).fromNow() } by { author }</div>
        </Media>
      </div>
    </Card>
  )
}
