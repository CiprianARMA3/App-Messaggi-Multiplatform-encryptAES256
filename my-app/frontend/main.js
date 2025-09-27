const { app, BrowserWindow } = require("electron");
const path = require("path");
const { MongoClient } = require("mongodb");

let mainWindow;

// --- MongoDB connection ---
async function connectDB() {
  const uri = "mongodb://localhost:27017"; // default local MongoDB
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    return client.db("testdb"); // Example DB
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

// --- Create window ---
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // optional, safe bridge for frontend/backend
    },
  });

  if (process.env.ELECTRON_START_URL) {
    // Development: React dev server
    mainWindow.loadURL(process.env.ELECTRON_START_URL);
  } else {
    // Production: load React build
    mainWindow.loadFile(path.join(__dirname, "build", "index.html"));
  }
}

// --- App events ---
app.whenReady().then(async () => {
  createWindow();
  await connectDB();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
