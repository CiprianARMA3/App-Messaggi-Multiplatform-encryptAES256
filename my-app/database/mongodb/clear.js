import { MongoClient } from "mongodb"; // or require if CommonJS

async function clearDB() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("myAppDB"); // Replace with your DB name
    await db.dropDatabase();
    console.log("✅ Database cleared!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

clearDB();
