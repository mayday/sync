/* eslint-disable no-param-reassign */

// import { actions as git } from 'sync-store-git'
// import { store } from 'sync-store'
import Keyboard from 'keyboard-cjs'

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

  // HAX
  const kb = new Keyboard(window)
  const engaged = {}
  const creator = syncPaneBranchesKeymap['cmd-b']

  kb.on('*', 'activate', (e) => {
    if (e.action === 'activate') {
      if (e.name === 'OSLeft') {
        engaged.cmd = true
      }
    }

    if (e.action === 'release') {
      if (e.name === 'OSLeft') {
        engaged.cmd = true
      }
    }

    if (e.action === 'press') {
      if (e.name === 'b' && engaged.cmd) {
        dispatch(creator(dispatch))
      }
    }
  })
}
