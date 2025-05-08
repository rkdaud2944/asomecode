'use strict'
import { app, protocol, BrowserWindow, Menu, ipcMain, dialog, nativeImage } from 'electron'
import fs from 'fs'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import path from 'path'
// 자동 업데이트
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

// 시리얼포트
import { SerialPort, ReadlineParser } from 'serialport'

const isDevelopment = process.env.NODE_ENV !== 'production'
// dev ↔ prod 모두 통하는 자산 경로 계산기
function resolveAsset(...segments) {
    if (isDevelopment) {
      // dev: background.js가 dist_electron 로더 밑에 모여 있으므로 한 폴더 위로
      return path.join(__dirname, '..', 'assets', ...segments)
    }
    // prod: resourcesPath(= 설치폴더\resources) 아래로 복사해 두기
    return path.join(process.resourcesPath, 'assets', ...segments)
  }
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
}

app.on('ready', async () => {
  // 개발 모드에서 Vue Devtools 설치
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools 설치 실패:', e)
    }
  }
  createWindow()

  if (app.isPackaged) {
    // 로깅 설정
    autoUpdater.logger = log
    autoUpdater.logger.transports.file.level = 'debug'

    // 업데이트 체크 시작
    log.info('자동 업데이트: 업데이트 확인 시작')
    autoUpdater.checkForUpdates()

    // 이벤트 핸들러
    autoUpdater.on('checking-for-update', () => {
      log.debug('checking-for-update 이벤트 발생')
    })
    autoUpdater.on('update-available', info => {
      log.info(`update-available: 새로운 버전 ${info.version} 발견`)
    })
    autoUpdater.on('update-not-available', () => {
      log.info('update-not-available: 사용 가능한 업데이트 없음')
    })
    autoUpdater.on('download-progress', progress => {
      log.debug(`download-progress: ${Math.round(progress.percent)}% (${progress.transferred}/${progress.total})`)
    })
    autoUpdater.on('update-downloaded', info => {

        const robotPath = resolveAsset('images', 'robot.png');

        // 경로 확인용 로그 (필요하면 주석 제거)
        console.log('Robot image path:', robotPath, fs.existsSync(robotPath));
      
        const robotImg = nativeImage.createFromPath(robotPath);
        // createFromPath가 실패하면 isEmpty()가 true
        let robotBase64 = '';
        if (!robotImg.isEmpty()) {
          robotBase64 = robotImg.toDataURL();           // 정상
        } else {
          // dev 편의용: 바로 읽어 변환
          const buf = fs.readFileSync(robotPath);
          robotBase64 = 'data:image/png;base64,' + buf.toString('base64');
        }
      const { width, height, x, y } = mainWindow.getBounds();
      const overlay = new BrowserWindow({
        parent: mainWindow,
        modal: true,
        width, height, x, y,
        frame: false,
        transparent: true,
        movable: true,
        closable: false,
        resizable: false,
        // alwaysOnTop: true,
        webPreferences: { nodeIntegration: true, contextIsolation: false }
      });
    
      const html = `
        <!DOCTYPE html>
        <meta charset="UTF-8">
        <style>
          html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden; }
          .overlay {
            position:absolute; top:0; left:0;
            width:100%; height:100%;
            background: rgba(0,0,0,0.6);
          }
          .dialog {
            position:absolute; top:50%; left:50%;
            transform: translate(-50%,-50%);
            width: 320px;
            background: #FFFFFF;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            padding: 24px 20px;
            font-family: 'Pretendard-Regular', sans-serif;
            text-align: center;
          }
          .robot  {width:140px;height:auto;margin-bottom:16px;}
          .dialog h2 {
            margin: 0 0 17px;
            font-size: 18px;
            font-weight: 600;
            color: #E4007F;
          }
          .dialog .divider {
            width: 100%; height: 1px;
            background: #D8D8D8;
            margin-bottom: 16px;
          }
          .dialog p {
            margin: 0 0 24px;
            font-size: 14px;
            line-height: 1.4;
            color: #979797;
          }
          .btn-update {
            width: 100%;
            padding: 10px 0;
            font-size: 15px;
            font-weight: 600;
            border: none;
            border-radius: 6px;
            background: #E4007F;
            color: #FFFFFF;
            cursor: pointer;
            font-family: 'Pretendard-Regular', sans-serif;
          }
        </style>
        <body>
          <div class="overlay"></div>
          <div class="dialog">
            <h2>새로운 버전 (${info.version})이 출시되었어요!</h2>
            <img class="robot" src="${robotBase64}" alt="AsomeBot">
            <div class="divider"></div>
            <p>
              지금 사용 중인 버전은 오래된 버전이에요.<br>
              아래 ‘업데이트’ 버튼을 눌러 최신 기능과<br>
              개선 사항을 만나보세요!
            </p>
            <button id="update" class="btn-update">업데이트</button>
          </div>
          <script>
            const { ipcRenderer } = require('electron');
            document.getElementById('update').onclick = () => {
              ipcRenderer.send('install-update');
            };
          </script>
        </body>
      `;
    
      overlay.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`);
    
      ipcMain.once('install-update', () => {
        autoUpdater.quitAndInstall();
      });
    });
    
    autoUpdater.on('error', err => {
      log.error('자동 업데이트 에러:', err)
    })
  }
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
