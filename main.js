const { app, BrowserWindow, screen, } = require('electron');

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const windowWidth = Math.min(width, 375); 
  const windowHeight = Math.min(height, 667);

  const win = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Ocultar la barra de menú
  win.removeMenu();

  win.loadURL('http://localhost:3000');

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
