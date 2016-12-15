/* eslint-disable no-param-reassign */

// import { actions as git } from 'sync-store-git'
// import { store } from 'sync-store'
import _ from 'lodash'
import Mousetrap from 'mousetrap'

import { keymap as syncPaneBranchesKeymap } from 'sync-pane-branches'

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

  const keymaps = {
    ...syncPaneBranchesKeymap,
  }

  _.each(keymaps, (action, combo) => {
    Mousetrap.bind(combo, () => {
      const state = getState()
      dispatch(action(dispatch, state))
    })
  })
}
