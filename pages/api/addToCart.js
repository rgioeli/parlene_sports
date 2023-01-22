import { mongoConnect } from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res
      .status(400)
      .json({ error: "Only post requests go through here." });
  try {
    const body = JSON.parse(req.body);
    const client = await mongoConnect();
    const db = client.db("parlene_sports");
    await db.collection("cart").insertOne({ user: "rgioeli314", ...body });
    res.json({ success: body });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
