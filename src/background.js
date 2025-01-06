'use strict'

import { app, protocol, BrowserWindow, Menu, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import path from 'path'

// ───────── 시리얼포트 라이브러리 ─────────
import { SerialPort, ReadlineParser } from 'serialport'

const isDevelopment = process.env.NODE_ENV !== 'production'

// 프로토콜 등록 (vue-cli-plugin-electron-builder 기본 설정)
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let mainWindow = null

async function createWindow() {
  mainWindow = new BrowserWindow({
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

  // 개발 모드(webpack-dev-server) vs 프로덕션 모드
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    mainWindow.loadURL('app://./index.html')
  }

  // ───────── contextMenu (뒤로/앞으로) ─────────
  const contextMenu = Menu.buildFromTemplate([
    { label: '뒤로 가기', click: () => mainWindow.webContents.goBack() },
    { label: '앞으로 가기', click: () => mainWindow.webContents.goForward() },
  ])
  mainWindow.webContents.on('context-menu', () => {
    contextMenu.popup({ window: mainWindow })
  })

  // ───────── Ctrl+휠 확대/축소 ─────────
  let zoomFactor = 1.0
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.setZoomFactor(zoomFactor)
    mainWindow.webContents.executeJavaScript(
      `window.initialZoomFactor = ${zoomFactor}; window.updateZoomDisplay(${zoomFactor})`
    )
  })
  mainWindow.webContents.on('zoom-changed', (event, zoomDirection) => {
    if (zoomDirection === 'in') {
      zoomFactor += 0.1
    } else if (zoomDirection === 'out') {
      zoomFactor -= 0.1
    }
    mainWindow.webContents.setZoomFactor(zoomFactor)
    mainWindow.webContents.executeJavaScript(`window.updateZoomDisplay(${zoomFactor})`)
  })
  mainWindow.webContents.on(
    'mouse-wheel',
    (event, deltaX, deltaY) => {
      if (event.ctrlKey) {
        event.preventDefault()
        if (deltaY < 0) {
          zoomFactor += 0.1
        } else {
          zoomFactor -= 0.1
        }
        mainWindow.webContents.setZoomFactor(zoomFactor)
        mainWindow.webContents.executeJavaScript(`window.updateZoomDisplay(${zoomFactor})`)
      }
    },
    { passive: false }
  )

  // 자식창 확대/축소 공유 방지
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url) {
      return {
        action: 'allow',
        overrideBrowserWindowOptions: {
          alwaysOnTop: false,
          autoHideMenuBar: true,
          backgroundColor: '#fff',
          webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            devTools: !process.env.IS_TEST,
            zoomFactor: 1.0,
          },
        },
      }
    }
    return { action: 'deny' }
  })
}

// ───────── 전역 포트/파서 ─────────
let globalSerialPort = null
let globalParser = null

// (A) 포트 목록
ipcMain.handle('list-serial-ports', async () => {
  try {
    const ports = await SerialPort.list()
    return ports
  } catch (error) {
    console.error('Error listing serial ports:', error)
    throw error
  }
})

// (B) 포트 열기
ipcMain.handle('open-serial-port', async (event, { portPath }) => {
  try {
    // 이미 열린 포트가 있으면 닫고 초기화
    if (globalSerialPort) {
      try {
        globalSerialPort.close()
      } catch (err) {
        console.warn('Failed to close existing port:', err)
      }
      globalSerialPort = null
      globalParser = null
    }

    const port = new SerialPort({
      path: portPath,
      baudRate: 115200,
      autoOpen: false,
      lock: false,
    })
    const parser = new ReadlineParser({ delimiter: '\r\n' })
    port.pipe(parser)

    // 데이터 수신
    parser.on('data', (msg) => {
      console.log('[Serial Data]', msg)
      if (mainWindow) {
        mainWindow.webContents.send('serial-data', msg)
      }
    })

    // ★ 포트가 닫혔을 때 -> 렌더러로 알림
    port.on('close', () => {
      console.log('[Serial] port.on("close"): ', portPath)
      if (mainWindow) {
        mainWindow.webContents.send('serial-closed')
      }
    })

    // 실제 포트를 열기
    await new Promise((resolve, reject) => {
      port.open((err) => {
        if (err) reject(err)
        else resolve()
      })
    })

    globalSerialPort = port
    globalParser = parser

    console.log('Serial Port opened:', portPath)
    return { success: true, path: portPath }
  } catch (error) {
    console.error('Error opening port:', error)
    throw error
  }
})

// (C) 포트 닫기
ipcMain.handle('close-serial-port', async () => {
  if (globalSerialPort) {
    // 이미 열려 있고 isOpen이면 닫기
    if (globalSerialPort.isOpen) {
      try {
        globalSerialPort.close()
      } catch (err) {
        console.error('Error closing port:', err)
      }
    }
    globalSerialPort = null
    globalParser = null
  }
  console.log('[Serial] Port closed.')
  return { success: true }
})

// (D) 데이터 쓰기
ipcMain.handle('write-serial-port', async (event, { text }) => {
  if (!globalSerialPort) {
    throw new Error('No serial port is open')
  }
  globalSerialPort.write(text)
  return { success: true }
})

// ───────── Electron 기본 이벤트 ─────────
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

// 개발 환경용 종료 처리
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
