/* eslint-disable no-param-reassign */

// import { actions as git } from 'sync-store-git'
// import { store } from 'sync-store-selectors'
import _ from 'lodash'
import Mousetrap from 'mousetrap'
import { getKeymaps, plugins } from 'sync-plugins'

export const registerEvents = (window, { getState, dispatch }) => { // eslint-disable-line
  const getOnLoad = _(plugins).map('windowOnFocus').compact().value()

  window.onblur = () => {}
  window.onfocus = () => {
    const state = getState() // eslint-disable-line
    // dispatch(git.gitReposStatus(store.getRepos(state)))
    // dispatch(git.gitAdd()).then(() => {
    //   dispatch(git.gitDiff())
    //   dispatch(git.gitDiffSummary())
    //   dispatch(git.gitCommits())
    // })

    _.each(getOnLoad, (onLoad) => {
      onLoad(dispatch)
    })
  }


  _.each(getOnLoad, (onLoad) => {
    onLoad(dispatch)
  })

  const keymaps = getKeymaps()

  _.each(keymaps, (action, combo) => {
    Mousetrap.bind(combo, () => {
      const state = getState()
      dispatch(action(dispatch, state))
    })
  })
}
