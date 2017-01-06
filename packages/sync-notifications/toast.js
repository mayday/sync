/* eslint-disable react/no-danger */
import React from 'react'
import reactCSS from 'reactcss'
import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'

export const Toasts = ({ message }) => {
  const styles = reactCSS({
    'default': {
      toast: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        padding: 15,
        fontSize: 15,
        minWidth: 288,
        minHeight: 17,
        borderRadius: 2,
        background: 'rgba(20,20,20,.9)',
        color: 'white',
        zDepth: 1,
        opacity: 0,
        transform: 'translateY(60px)',
        transition: 'all 100ms ease-out',
        zIndex: 9,
        maxWidth: 300,
      },
    },
    'visible': {
      toast: {
        transform: 'translateY(0)',
        opacity: 0.97,
      },
    },
  }, { visible: !!message })

  return (
    <div style={ styles.toast } dangerouslySetInnerHTML={{ __html: message }} />
  )
}

export default connect(
  state => ({
    ...store.getRecentToast(state),
  }),
)(Toasts)
