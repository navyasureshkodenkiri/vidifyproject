import express from "express";
import cors from "cors";
import { json } from "express";
import { getVideos, getVideosCategories } from "./service/videoService.js";


const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getVideos", async (req, res) => {
  getVideos(req, res);
});

app.get("/getVideoCategories", async (req, res) => {
  getVideosCategories(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
