import React from 'react'
import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { actions } from './reducer'
import { LocalChanges } from './components/local-changes'

export const name = 'Local Changes'
export const headerIcon = 'M20,16V10H22V16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H16V4H8V16H20M10.91,7.08L14,10.17L20.59,3.58L22,5L14,13L9.5,8.5L10.91,7.08M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z'

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
    onToggleAllFilesStaged: actions.toggleAllFilesStaged,
  },
)(LocalChangesContainer)

export { reducer, actions, selectors, windowOnFocus } from './reducer'
