import mysql from "mysql2/promise";

async function connectMySQL() {
  try {
      const connection = await mysql.createConnection({
        host: "localhost",
        user: "nodeuser",
        password: "strongpassword",
        database: "database_users"
      });

    console.log("✅ Connected to MySQL");

    // Example query to test
    const [rows] = await connection.execute("DESCRIBE users;");
    console.log("Users:", rows);

    await connection.end(); // close connection when done
  } catch (err) {
    console.error("❌ MySQL connection error:", err);
  }
}

// Run the function immediately
connectMySQL();
