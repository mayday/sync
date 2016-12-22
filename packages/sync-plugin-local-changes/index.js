import React from 'react'
import { Icon } from 'sync-components'
import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { actions } from './reducer'
import { LocalChanges } from './components/local-changes'

export const name = 'Local Changes'
export const icon = <Icon name="checkbox-multiple-marked-outline" />

class LocalChangesContainer extends React.Component {
  componentDidMount() { this.props.onRefresh() }
  render() { return <LocalChanges { ...this.props } /> }
}

export default connect(
  state => ({
    files: store.getChangedFilesByRepo(state, '/Users/case/Github/sync'),
    selectedFile: store.getSelectedFile(state),
    message: store.getMessage(state),
  }), {
    onFileSelect: actions.selectFile,
    onToggleStaged: actions.toggleStagedFile,
    onEditMessage: actions.editMessage,
    onCommit: actions.commit,
    onRefresh: actions.refresh,
    onDiscardChanges: actions.discardChanges,
  },
)(LocalChangesContainer)

export { reducer, actions, selectors } from './reducer'
