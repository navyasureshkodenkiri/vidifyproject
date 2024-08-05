import express from "express";
import cors from "cors";
import { json } from "express";
import { getVideos, getVideosCategories } from "./service/videoService.js";
import {
  loginService,
  registerService,
  verifyOTPService,
} from "./service/authService.js";

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/register", (req, res) => {
  registerService(req, res);
});

app.post("/login", async (req, res) => {
  loginService(req, res);
});

app.post("/verify-otp", async (req, res) => {
  verifyOTPService(req, res);
});

app.get("/getVideos", async (req, res) => {
  getVideos(req, res);
});

app.get("/getVideoCategories", async (req, res) => {
  getVideosCategories(req, res);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
