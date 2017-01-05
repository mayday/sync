import { connect } from 'react-redux'
import { actions } from 'sync-store-git'
import Mixpanel from 'mixpanel'

import { AnalyticsWelcome } from './components/welcome'

export const localNameKey = 'beta-user-name'
export const localEmailKey = 'beta-user-email'
const mixpanel = Mixpanel.init('cb0310213d66693f9ab2300daa7579d7')
let email

export default connect(
  () => ({}), {
    onLoad: actions.gitConfigUserEmail,
  },
)(AnalyticsWelcome)


export const middleware = () => next => (action) => {
  if (action.type === 'GIT/REPOS/USER_EMAIL') {
    email = action.email
    mixpanel.people.set(email, {
      $email: email,
    })
    mixpanel.people.increment(email, 'app_visists')
  }

  // This should import the exports of plugins yo
  const handler = {
    'GIT/REPOS/DIFF': () => {
      mixpanel.track('diff', {
        distinct_id: email,
      })
    },
  }[action.type]
  handler && handler()

  if (action.type.indexOf('_FAILURE') > -1) {
    mixpanel.track('error', {
      distinct_id: email,
      errorText: action.errorText,
      action,
    })
  }

  next(action)
}
