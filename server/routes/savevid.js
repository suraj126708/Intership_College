const express = require("express");
const multer = require("multer");
const path = require("path");
const videoController = require("../controllers/videoController");
const User = require("../models/User");
const Video = require("../models/Video");

const router = express.Router();

const fs = require("fs");
const TokenAuthMiddleware = require("../middlewares/TokenAuthenticationMiddleware");
// Configure multer for file upload
// const upload = multer({
//     dest: path.join(__dirname, '../uploads/temp'),
//     limits: { fileSize: 50 * 1024 * 1024 } // 50MB file size limit
// });

// Route to save video
//router.post('/save', upload.single('video'), videoController.saveVideo);

// Configure multer with custom filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const videoDir = path.join(__dirname, "../uploads/videos");

    // Create directory if it doesn't exist
    if (!fs.existsSync(videoDir)) {
      fs.mkdirSync(videoDir, { recursive: true });
    }

    cb(null, videoDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename with original extension
    cb(null, `video_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Allow only video files
    const allowedTypes = ["video/webm", "video/mp4", "video/x-matroska"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only WebM and MP4 are allowed."), false);
    }
  },
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB file size limit
});

router.post(
  "/save",
  TokenAuthMiddleware,
  upload.single("video"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No video file uploaded" });
      }

      const userId = req.user._id;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const newVideo = new Video({
        filename: req.file.filename,
        path: `/uploads/videos/${req.file.filename}`,
        user: user._id,
      });

      await newVideo.save();

      res.status(201).json({
        message: "Video saved successfully",
        filename: req.file.filename,
        videoPath: newVideo.path,
      });
    } catch (error) {
      console.error("Video save error:", error);
      res
        .status(500)
        .json({ message: "Error saving video", error: error.message });
    }
  }
);

router.get("/list", TokenAuthMiddleware, videoController.getVideos);

module.exports = router;
