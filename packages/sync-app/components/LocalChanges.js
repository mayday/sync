import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { actions as gitActions } from 'sync-store-git'
import { actions as uiActions } from 'sync-store-ui'

import { LocalChanges } from 'sync-components'

export default connect(
  state => ({
    ...store.getCurrentRepo(state),
    fileSelected: store.getFileSelected(state),
    commitMessage: store.getCommitMessage(state),
  }),
  {
    onSelect: uiActions.setFileSelectedDiff,
    onCommitMessageChange: uiActions.setCommitMessage,
    onCommit: gitActions.gitCommit,
    ...gitActions,
    ...uiActions,
  },
)(LocalChanges)
