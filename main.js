const electron = require('electron');
const {ipcMain} = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let externalWindow;

function createWindows() {

  var electronScreen = electron.screen;
  var displays = electronScreen.getAllDisplays();
  var usingExternalDisplay = false;

  for (var i in displays) {
    if (displays[i].bounds.x != 0 || displays[i].bounds.y != 0) {
      usingExternalDisplay = true;
      createPresentationWindow(displays[i]);
      break;
    }
  }

  createPresenterWindow();

  if(!usingExternalDisplay) {
    createPresentationWindow();
  }

}

function createPresentationWindow(display) {
  // Create the browser window.
  if(display) {
    externalWindow = new BrowserWindow({
      fullscreen: true,
      x: displays[i].bounds.x + 50,
      y: displays[i].bounds.y + 50
    });
  } else {
    externalWindow = new BrowserWindow({width: 800, height: 600});
  }


  // and load the index.html of the app.
  externalWindow.loadURL(url.format({
    pathname: path.join(__dirname,'presentation','index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  externalWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  externalWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    externalWindow = null;
  });
}

function createPresenterWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname,'presenter','index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindows);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindows();
  }
});


ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.returnValue = 'pong'
})
