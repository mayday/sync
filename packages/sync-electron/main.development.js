/* eslint-disable no-console */

import path from 'path'
import { app, BrowserWindow } from 'electron'
import windowStateKeeper from 'electron-window-state'
import debug from 'electron-debug'

const DEV = process.env.NODE_ENV === 'development'

const createWindow = () => {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 750,
    defaultHeight: 450,
  })

  const { x, y, width, height } = mainWindowState
  const mainWindow = new BrowserWindow({
    x,
    y,
    width,
    height,
    show: false,
    transparent: true,
    frame: false,
  })

  mainWindowState.manage(mainWindow)
  mainWindow.loadURL(`file://${ __dirname }/index.html`)

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  if (DEV) { mainWindow.openDevTools() }
}

if (DEV) { debug() }

app.on('ready', createWindow)

app.on('before-quit', () => {
  console.log('Electron Stopped')
})
