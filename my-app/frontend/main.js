const { app, BrowserWindow } = require("electron");
const path = require("path");
const { MongoClient } = require("mongodb");
const mysql = require("mysql2/promise");

let mainWindow;

// --- MongoDB connection ---
async function connectMongoDB() {
  const uri = "mongodb://localhost:27017"; // MongoDB URL
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    return client.db("myAppMongoDB"); // MongoDB database
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

// --- MySQL connection ---
async function connectMySQL() {
  try {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "nodeuser",
        password: "strongpassword",
        database: "database_users"
    });
    console.log("✅ Connected to MySQL");
    return connection;
  } catch (err) {
    console.error("❌ MySQL connection error:", err);
  }
}

// --- Create Electron window ---
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // optional
    },
  });

  if (process.env.ELECTRON_START_URL) {
    mainWindow.loadURL(process.env.ELECTRON_START_URL); // Dev server
  } else {
    mainWindow.loadFile(path.join(__dirname, "build", "index.html")); // Production
  }
}

// --- App initialization ---
app.whenReady().then(async () => {
  createWindow();

  // Connect to databases
  const mongoDB = await connectMongoDB();
  const mySQL = await connectMySQL();

  // Example usage:
  if (mongoDB) {
    const users = await mongoDB.collection("users").find().toArray();
    console.log("MongoDB users:", users);
  }

  if (mySQL) {
    const [rows] = await mySQL.execute("SELECT * FROM users");
    console.log("MySQL users:", rows);
  }

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
