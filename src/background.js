'use strict'

import { app, protocol, BrowserWindow, ipcMain, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
// const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production'

const ipc = ipcMain; // titlebar


protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 1024,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: 'preload.js',
    },
    backgroundColor: '#FFF',
  })
  
  // 일렉트론 상단 메뉴바 제거
  // win.setMenu(null)
  win.setMenuBarVisibility(false)
  
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }

  // titlebar
  ipc.on('minimizeApp', ()=>{
    win.minimize();
  })
  
  ipc.on('maximizeApp', ()=>{
    if(win.isMaximized()){
      win.restore();
    } else {
      win.maximize();
    }
  })
  
  ipc.on('closeApp', ()=>{
    win.close();
  })

  const contextMenu = Menu.buildFromTemplate([
    { label: '뒤로 가기', click: () => win.webContents.goBack() },
    { label: '앞으로 가기', click: () => win.webContents.goForward() },
    { label: '새로고침', click: () => win.webContents.reload() }
  ]);

  win.webContents.on('context-menu', () => {
    contextMenu.popup({ window: win });
  });

}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
