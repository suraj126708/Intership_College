const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const { GridFsStorage } = require("multer-gridfs-storage");
const VideoMetadata = require("../");
require("dotenv").config();

// Create GridFS storage
const storage = new GridFsStorage({
  url: process.env.Mongo_url,
  file: (req, file) => {
    return {
      filename: `interview_${Date.now()}_${file.originalname}`,
      bucketName: "interviews",
    };
  },
});

const upload = multer({ storage });

// Route to upload video
router.post("/upload-interview", upload.single("video"), async (req, res) => {
  if (req.file) {
    try {
      // Create a new video metadata record
      const videoMetadata = new VideoMetadata({
        filename: req.file.filename,
        fileId: req.file.id,
        size: req.file.size,
        contentType: req.file.mimetype,
      });

      // Save the metadata to the database
      await videoMetadata.save();

      res.json({
        message: "Video uploaded successfully",
        fileId: req.file.id,
      });
    } catch (error) {
      console.error("Error saving video metadata:", error);
      res.status(500).json({ message: "Error saving video metadata" });
    }
  } else {
    res.status(400).json({ message: "Upload failed" });
  }
});

module.exports = router;
