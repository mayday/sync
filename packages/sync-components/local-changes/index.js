import React from 'react'
import reactCSS from 'reactcss'
import parse from 'parse-diff'

import { Card, Scroll } from 'sync-components'
import { LocalChangesFiles } from './files'
import { LocalChangesDiff } from './diff'

export class LocalChanges extends React.Component {
  componentDidMount() {
    const currFileName = this.props.files[0] && this.props.files[0].path
    this.props.onSelect(currFileName)
  }
  componentDidUpdate(lastProps) {
    const lastFileName = lastProps.files[0] && lastProps.files[0].path
    const currFileName = this.props.files[0] && this.props.files[0].path

    if (lastFileName !== currFileName) {
      this.props.onSelect(currFileName)
    }
  }
  render() {
    const { files, diff, fileSelected, onSelect } = this.props
    const styles = reactCSS({
      'default': {
        wrap: {
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
        },
        commit: {
          height: 54,
          borderBottom: '1px solid #222',
        },
        changes: {
          flex: 1,
          display: 'flex',
          minWidth: 0,
        },
        files: {
          width: 200,
          display: 'flex',
          borderRight: '1px solid #222',
        },
        diff: {
          flex: 1,
          display: 'flex',
          minWidth: 0,
        },
      },
    })

    return (
      <Card style={{ display: 'flex', flex: 1, minWidth: 0 }}>
        <div style={ styles.wrap }>
          <div style={ styles.commit }>
            commit
          </div>
          <div style={ styles.changes }>
            <div style={ styles.files }>
              <Scroll>
                <LocalChangesFiles
                  files={ files }
                  fileSelected={ fileSelected }
                  onSelect={ onSelect }
                />
              </Scroll>
            </div>
            <div style={ styles.diff }>
              <Scroll x>
                <LocalChangesDiff
                  fileSelected={ fileSelected }
                  files={ parse(diff) }
                />
              </Scroll>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}