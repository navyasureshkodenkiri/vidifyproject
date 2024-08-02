import db from "../config/db.js";

async function getVideos(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM `videos`");
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getVideosCategories(req, res) {
    try {
      const [rows] = await db.query("SELECT * FROM `categories`");
      res.json(rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
export { getVideos, getVideosCategories};
