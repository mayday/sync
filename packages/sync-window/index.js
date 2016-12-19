/* eslint-disable no-param-reassign */

// import { actions as git } from 'sync-store-git'
// import { store } from 'sync-store-selectors'
import _ from 'lodash'
import Mousetrap from 'mousetrap'
import { getKeymaps } from 'sync-plugins'

export const registerEvents = (window, { getState, dispatch }) => { // eslint-disable-line
  window.onblur = () => {}
  window.onfocus = () => {
    const state = getState() // eslint-disable-line
    // dispatch(git.gitReposStatus(store.getRepos(state)))
    // dispatch(git.gitAdd()).then(() => {
    //   dispatch(git.gitDiff())
    //   dispatch(git.gitDiffSummary())
    //   dispatch(git.gitCommits())
    // })
  }

  const keymaps = getKeymaps()

  _.each(keymaps, (action, combo) => {
    Mousetrap.bind(combo, () => {
      const state = getState()
      dispatch(action(dispatch, state))
    })
  })
}
