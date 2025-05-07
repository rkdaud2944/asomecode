'use strict'

import { app, protocol, BrowserWindow, Menu, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import path from 'path'
// 자동 업데이트
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

// 시리얼포트
import { SerialPort, ReadlineParser } from 'serialport'

const isDevelopment = process.env.NODE_ENV !== 'production'

// vue-cli-plugin-electron-builder 기본
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let mainWindow = null

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 1024,
    autoHideMenuBar: true,
    backgroundColor: '#FFF',
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    mainWindow.loadURL('app://./index.html')
  }

  const contextMenu = Menu.buildFromTemplate([
    { label: '뒤로 가기', click: () => mainWindow.webContents.goBack() },
    { label: '앞으로 가기', click: () => mainWindow.webContents.goForward() },
  ])
  mainWindow.webContents.on('context-menu', () => {
    contextMenu.popup({ window: mainWindow })
  })

  // 확대/축소 로직 등은 필요하면 추가
}
app.on('ready', async () => {
  // 개발모드에선 Vue devtools
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools 설치 실패:', e.toString())
    }
  }

  createWindow()

  // --- 자동 업데이트 설정 시작 ---
  if (app.isPackaged) {
    // 로깅
    autoUpdater.logger = log
    autoUpdater.logger.transports.file.level = 'info'

    // 업데이트 체크 & 알림
    autoUpdater.checkForUpdatesAndNotify()
    autoUpdater.on('checking-for-update', () => console.log('🔍 업데이트 체크 중…'))
    autoUpdater.on('update-available', info => console.log('✅ 새 버전 발견:', info.version))
    autoUpdater.on('update-not-available', () => console.log('ℹ️ 업데이트 없음'))
    autoUpdater.on('error', err => console.error('❌ 업데이트 에러:', err))
    // (선택) 이벤트 추가로 진행 상황 핸들링 가능
    autoUpdater.on('update-available', info => {
      log.info(`새 버전 발견: ${info.version}`)
    })
    autoUpdater.on('update-downloaded', () => {
      dialog.showMessageBox(mainWindow, {
        type: 'info',
        buttons: ['지금 재시작','나중에'],
        defaultId: 0,
        message: '업데이트가 준비되었습니다. 지금 재시작할까요?'
      }).then(({ response }) => {
        if (response === 0) autoUpdater.quitAndInstall()
      })
    })
    autoUpdater.on('error', err => {
      log.error('업데이트 에러:', err)
    })
  }
  // --- 자동 업데이트 설정 끝 ---
})

// ──────────────────────────
// 전역 시리얼 포트
// ──────────────────────────
let globalSerialPort = null
let globalParser = null

// (A) 포트 목록
ipcMain.handle('list-serial-ports', async () => {
  const ports = await SerialPort.list()
  return ports
})

// (B) 포트 열기 => 연결 직후 `import os; os.uname()` 전송
ipcMain.handle('open-serial-port', async (event, { portPath }) => {
  // 이미 열려 있으면 닫기
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

  // 모든 시리얼 데이터 → 렌더러('serial-data')
  parser.on('data', (msg) => {
    console.log('[Serial Data]', msg)
    if (mainWindow) {
      mainWindow.webContents.send('serial-data', msg)
    }
  })

  // 포트가 닫혔을 때 → 'serial-closed'
  port.on('close', () => {
    console.log('[Serial] port closed:', portPath)
    if (mainWindow) {
      mainWindow.webContents.send('serial-closed')
    }
  })

  await new Promise((resolve, reject) => {
    port.open((err) => {
      if (err) reject(err)
      else resolve()
    })
  })

  globalSerialPort = port
  globalParser = parser
  console.log('Serial Port opened:', portPath)

  // 연결 직후 uname()
  port.write("import os; os.uname()\r\n")

  return { success: true, path: portPath }
})

// (C) 포트 닫기
ipcMain.handle('close-serial-port', async () => {
  if (globalSerialPort) {
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

// (D) write
ipcMain.handle('write-serial-port', async (event, { text }) => {
  if (!globalSerialPort) {
    throw new Error('No serial port is open')
  }
  globalSerialPort.write(text)
  return { success: true }
})

// ──────────────────────────
// Electron 기본
// ──────────────────────────
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
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
