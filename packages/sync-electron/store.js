import electron from 'electron'
import path from 'path'
import fs from 'fs'

const app = electron.app || electron.remote.app
const settingsFile = path.join(app.getPath('userData'), 'settings.js')
const exportsString = 'module.exports = '

export const getSettings = () => {
  try {
    const file = fs.readFileSync(settingsFile, 'utf-8')
    return JSON.parse(file.replace(exportsString, ''))
  } catch (err) {
    return {}
  }
}

export const saveSettings = (obj) => {
  const data = JSON.stringify(obj, null, 2)
  fs.writeFileSync(settingsFile, exportsString + data)
}
