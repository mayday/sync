import React from 'react'
import { Icon } from 'sync-components'
import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { actions } from './reducer'
import { LocalChanges } from './components/local-changes'

export const name = 'Local Changes'
export const icon = <Icon name="checkbox-multiple-marked-outline" />

export default connect(
  state => ({
    files: store.getChangedFilesByRepo(state, '/Users/case/Github/sync'),
    selectedFile: store.getSelectedFilePath(state),
    diff: store.getSelectedDiff(state),
  }), {
    onFileSelect: actions.selectFile,
    onToggleStaged: actions.toggleStagedFile,
  },
)(LocalChanges)

export { reducer, actions, selectors } from './reducer'
