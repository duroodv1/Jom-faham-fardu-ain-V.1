// Electron — JOM FAHAM FARDU AIN V.1 (Windows Desktop, 100% luar talian, aset dibungkus bersama app)
const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 1200, height: 820, minWidth: 360, minHeight: 600,
    title: "JOM FAHAM FARDU AIN V.1",
    icon: path.join(__dirname, "..", "assets", "icons", "icon-512.png"),
    autoHideMenuBar: true,
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, "..", "index.html"));
  win.webContents.setWindowOpenHandler(({ url }) => { // pautan luar dibuka di pelayar sistem, bukan dalam app kanak-kanak
    if (url.startsWith("http")) shell.openExternal(url);
    return { action: "deny" };
  });
}
app.whenReady().then(() => { createWindow(); app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); }); });
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
