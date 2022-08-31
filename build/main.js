"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const createWindow = () => {
    const mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            // nodeIntegration: false,
            contextIsolation: false,
            // contextIsolation: true,
            // enableRemoteModule: false,
            preload: path_1.default.join(__dirname, 'preload.js'),
        }
    });
    mainWindow.loadFile('index.html');
    // mainWindow.webContents.openDevTools({
    //   mode: "detach"
    // });
};
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
