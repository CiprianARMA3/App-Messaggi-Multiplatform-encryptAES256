const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("myAppDB");
    const users = db.collection("users");

    // Example insert
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();