/* eslint-disable no-param-reassign */

import { actions as git } from 'sync-git'

export const registerEvents = (window, dispatch) => {
  window.onblur = () => {}
  window.onfocus = () => {
    dispatch(git.gitDiff())
    dispatch(git.gitDiffSummary())
  }
}
