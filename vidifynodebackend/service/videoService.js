import db from "../config/db.js";

async function getVideos(req, res) {
  const{uploaded_by} = req.body
  try {
    const [rows] = await db.query("SELECT * FROM `videos` WHERE uploaded_by = ?",[uploaded_by]);
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getVideosCategories(req, res) {
  const {category} = req.body
    try {
      const [rows] = await db.query("SELECT * FROM `videos` WHERE category_name = ?",[category]);
      res.json(rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
export { getVideos, getVideosCategories};
