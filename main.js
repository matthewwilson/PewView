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
let presentationBuilderWindow;
let presenterWindow;
let presentationWindow;

function startPresentationBuilder() {
  // Create the browser window.
  presentationBuilderWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  presentationBuilderWindow.loadURL(url.format({
    pathname: path.join(__dirname,'presentationbuilder','index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  presentationBuilderWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  presentationBuilderWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    presentationBuilderWindow = null;
  });
}

function startPresentation() {

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
    presentationWindow = new BrowserWindow({
      fullscreen: true,
      x: displays[i].bounds.x + 50,
      y: displays[i].bounds.y + 50
    });
  } else {
    presentationWindow = new BrowserWindow({width: 800, height: 600});
  }


  // and load the index.html of the app.
  presentationWindow.loadURL(url.format({
    pathname: path.join(__dirname,'presentation','index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  //externalWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  presentationWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    presentationWindow = null;
  });
}

function createPresenterWindow() {
  // Create the browser window.
  presenterWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  presenterWindow.loadURL(url.format({
    pathname: path.join(__dirname,'presenter','index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  presenterWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  presenterWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    presenterWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', startPresentationBuilder);

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
  if (presentationBuilderWindow === null) {
    startPresentationBuilder();
  }
});


ipcMain.on('next-slide', (event, arg) => {
  externalWindow.webContents.send('next-slide', arg);
});
