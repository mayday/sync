/* eslint-disable no-param-reassign */

import _ from 'lodash'
import Mousetrap from 'mousetrap'
import { getKeymaps, plugins } from 'sync-plugins'

export const registerEvents = (window, { getState, dispatch }) => { // eslint-disable-line
  const getOnLoad = _(plugins).map('windowOnFocus').compact().value()

  window.onblur = () => {}
  window.onfocus = () => {
    const state = getState() // eslint-disable-line

    _.each(getOnLoad, (onLoad) => {
      onLoad(dispatch)
    })
  }

  const keymaps = getKeymaps()

  _.each(keymaps, (combos) => {
    _.each(combos, (action, combo) => {
      Mousetrap.bind(combo, () => {
        const state = getState()
        dispatch(action(dispatch, state))
      })
    })
  })
}
