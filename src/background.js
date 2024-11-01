'use strict'

import { app, protocol, BrowserWindow, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import path from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 1024,
    autoHideMenuBar: true,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, 'preload.js'),
    },
    backgroundColor: '#FFF',
  })


  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }

  const contextMenu = Menu.buildFromTemplate([
    { label: '뒤로 가기', click: () => win.webContents.goBack() },
    { label: '앞으로 가기', click: () => win.webContents.goForward() },
    // { label: '새로고침', click: () => win.webContents.reload() }
  ]);

  win.webContents.on('context-menu', () => {
    contextMenu.popup({ window: win });
  });

  // Ctrl + 휠 확대/축소 기능
  let zoomFactor = 1.0;

  win.webContents.on('did-finish-load', () => {
    win.webContents.setZoomFactor(zoomFactor);
    win.webContents.executeJavaScript(`window.initialZoomFactor = ${zoomFactor}; window.updateZoomDisplay(${zoomFactor})`);
  });

  win.webContents.on('zoom-changed', (event, zoomDirection) => {
    if (zoomDirection === 'in') {
      zoomFactor += 0.1;
    } else if (zoomDirection === 'out') {
      zoomFactor -= 0.1;
    }
    win.webContents.setZoomFactor(zoomFactor);
    win.webContents.executeJavaScript(`window.updateZoomDisplay(${zoomFactor})`);
  });

  win.webContents.on('mouse-wheel', (event, deltaX, deltaY, screenX, screenY) => {
    if (event.ctrlKey) {
      event.preventDefault();
      if (deltaY < 0) {
        zoomFactor += 0.1;
      } else {
        zoomFactor -= 0.1;
      }
      win.webContents.setZoomFactor(zoomFactor);
      win.webContents.executeJavaScript(`window.updateZoomDisplay(${zoomFactor})`);
    }
  }, { passive: false });

  // 부모창과 자식창 확대/축소 공유 방지코드
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url) {
      return {
        action: 'allow',
        overrideBrowserWindowOptions: {
          alwaysOnTop : false,
          autoHideMenuBar: true, 
          backgroundColor: '#fff',
          webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            devTools: !process.env.IS_TEST,
            zoomFactor: 1.0
          }
        }
      }
    }
    return { action: 'deny' }
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
