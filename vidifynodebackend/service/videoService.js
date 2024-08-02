import db from "../config/db.js";


async function getVideos(req, res) {
    try {
        const [rows] = await db.query('SELECT * FROM `videos` WHERE uploadedBy= ?',[req.body.uploadedBy]);
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}


export {getVideos}