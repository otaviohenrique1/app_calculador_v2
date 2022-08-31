import { app, BrowserWindow } from 'electron';
import path from 'path';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      // nodeIntegration: false,
      contextIsolation: false,
      // contextIsolation: true,
      // enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  mainWindow.loadFile('index.html');

  // mainWindow.webContents.openDevTools({
  //   mode: "detach"
  // });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});
