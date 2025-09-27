import { MongoClient } from "mongodb";

export async function connectMongo() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  console.log("✅ Connected to MongoDB");
  return client.db("myAppDB");
}