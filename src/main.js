const { app, BrowserWindow } = require('electron');

function createWindow(file) {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile(file);
}

app.whenReady().then(() => {
    createWindow('./src/index.html');
})