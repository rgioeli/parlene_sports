import { MongoClient } from "mongodb";

export const mongoConnect = async () => {
  try {
    const client = await new MongoClient(process.env.MONGODB_URI);
    return await client.connect();
  } catch (err) {
    throw err;
  }
};
