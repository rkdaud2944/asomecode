'use strict'

import { app, protocol, BrowserWindow, ipcMain, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const path = require('path');

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
      contextIsolation: false,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, 'preload.js'),
    },
    backgroundColor: '#FFF',
  })
  
  win.setMenu(null)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
    win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
    // win.loadURL('app://./curriculum?id=undefined&title=Asomekit');

    // win.loadURL(`file://${__dirname}/index.html#/blockCoding`)
    win.webContents.openDevTools()
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

  // new Window
  
  // 새 창에서 특정 페이지 띄우기
  // let newWindow = new BrowserWindow({
  //   width: 500,
  //   height: 400,
  //   webPreferences: {
  //     nodeIntegration: true
  //   }
  // });

  // // 여기서 'http://localhost:8080/#/your-route'는 Vue 라우터 경로에 해당하는 부분을 수정해야 합니다.
  // newWindow.loadURL('app://./index.html/#/your-route');
}

app.whenReady().then(createWindow);


ipcMain.on('child', (event, tweet, option)=>{//MainWindow에서 이미지를 띄우기 위해 데이터를 main으로 보냈고 main에서 수신하는 부분입니다.
  var win = new BrowserWindow({
    show:false,//show는 false로 해야 데이터를 보낼 수 있습니다. 이유는 바로 아래 주석 참조
  });
  const modalPath = process.env.NODE_ENV === 'development'? 'http://localhost:9080/#/Image' : `file://${__dirname}/index.html#Image`//개발환경일 경우의 route설정과 빌드파일일 경우의 route설정입니다.
  win.loadURL(modalPath);//이걸 안 하면 빈페이지만 뜨게 될 것입니다. route설정도 필수고요 아래에 있습니다.
  win.on('ready-to-show', ()=>{//ready-to-show는 필수입니다. ready-to-show이전에 데이터 전송 시 못받습니다. 그래서 BrowserWindow 생성 시 show: false가 필수입니다.
    win.webContents.send('tweet', tweet, option);//win 객체에 데이터를 보냅니다. 데이터는 tweet, option입니다.
    win.show();//이제 데이터도 보냈겠다 show해줍시다
  })
})

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
