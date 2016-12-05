/* eslint-disable no-param-reassign */

import { actions as git } from 'sync-store-git'
import { store } from 'sync-store'

export const registerEvents = (window, { getState, dispatch }) => {
  window.onblur = () => {}
  window.onfocus = () => {
    const state = getState()
    dispatch(git.gitReposStatus(store.getRepos(state)))
    dispatch(git.gitAdd()).then(() => {
      dispatch(git.gitDiff())
      dispatch(git.gitDiffSummary())
      dispatch(git.gitCommits())
    })
  }
}
