/* eslint-disable no-unused-vars */

const SPACE = 15
const ROUNDED = 4

const BG = 'rgba(39, 36, 42, 1)'
const BG_ALPHA = a => `rgba(39, 36, 42, ${ a })`
const BG_RAISED = 'rgba(50, 47, 53, 1)'
const BG_RAISED_ALPHA = a => `rgba(50, 47, 53, ${ a })`

const COLOR_HIGHLIGH = 'rgba(212, 225, 87, 1)'
const COLOR_HIGHLIGH_ALPHA = a => `rgba(212, 225, 87, ${ a })`
const COLOR_PRIMARY = 'rgba(255, 255, 255, 0.55)'
const COLOR_SECONDARY = 'rgba(255, 255, 255, 0.2)'

export default {
  body: {
    backgroundColor: BG,
  },
  header: {
    header: {
      height: 54,
      backgroundColor: BG_ALPHA(0.95),
    },
    repo: {
      color: COLOR_SECONDARY,
    },
    branch: {
      color: COLOR_PRIMARY,
    },
    border: {
      height: 1,
      marginRight: SPACE,
      marginLeft: SPACE,
      backgroundColor: COLOR_SECONDARY,
    },
  },
  sidebar: {
    sidebar: {
      minWidth: 150,
    },
    unstagedChanges: {
      // unstaged changes (dot)
    },
    localChanges: {
      color: COLOR_HIGHLIGH,
    },
  },
  card: {
    backgroundColor: BG_RAISED,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.24)',
    borderRadius: ROUNDED,
  },
  icon: {
    size: 20,
  },
  commits: {
    icon: {
      color: COLOR_SECONDARY,
    },
    message: {
      color: COLOR_PRIMARY,
    },
    meta: {
      color: COLOR_SECONDARY,
    },
    localChanges: {
      icon: {
        color: COLOR_HIGHLIGH,
      },
    },
  },
}
