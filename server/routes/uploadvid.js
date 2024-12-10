const mongoose = require("mongoose");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const { Readable } = require("stream");
require("dotenv").config();

// MongoDB Connection
const mongoURI = process.env.Mongo_url;

// Create mongoose connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a GridFS bucket
let bucket;
conn.once("open", () => {
  bucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "interviews",
  });
  console.log("GridFS Bucket Initialized");
});

// Multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /webm|mp4|avi|mov/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Error: Video files only!"));
    }
  },
});

const router = require("express").Router();

// Custom upload route with GridFS
router.post("/upload-interview", upload.single("video"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Generate a unique filename
  const filename = `interview_${Date.now()}${path.extname(
    req.file.originalname
  )}`;

  // Create a read stream from the buffer
  const readStream = new Readable();
  readStream.push(req.file.buffer);
  readStream.push(null);

  // Upload to GridFS
  const uploadStream = bucket.openUploadStream(filename, {
    metadata: {
      originalName: req.file.originalname,
      mimetype: req.file.mimetype,
      uploadedAt: new Date(),
    },
  });

  // Pipe the read stream to the upload stream
  readStream
    .pipe(uploadStream)
    .on("error", (error) => {
      console.error("Upload error:", error);
      return res.status(500).json({
        message: "Upload failed",
        error: error.message,
      });
    })
    .on("finish", () => {
      res.status(200).json({
        message: "Video uploaded successfully",
        fileId: uploadStream.id,
        filename: filename,
      });
    });
});

// Route to retrieve a video by filename
router.get("/get-interview/:filename", async (req, res) => {
  try {
    // Find the file by filename
    const files = await bucket
      .find({ filename: req.params.filename })
      .toArray();

    if (!files || files.length === 0) {
      return res.status(404).json({ message: "File not found" });
    }

    const file = files[0];

    // Set headers to stream the video
    res.set("Content-Type", file.contentType || "video/webm");
    res.set("Content-Disposition", `inline; filename="${file.filename}"`);

    // Create a download stream and pipe it to the response
    const downloadStream = bucket.openDownloadStreamByName(req.params.filename);
    downloadStream.pipe(res);
  } catch (error) {
    console.error("Error retrieving video:", error);
    res
      .status(500)
      .json({ message: "Error retrieving video", error: error.message });
  }
});

// Route to list all interview videos
router.get("/list-interviews", async (req, res) => {
  try {
    const files = await bucket.find().toArray();

    if (!files || files.length === 0) {
      return res.json({ message: "No videos found" });
    }

    const videoFiles = files.map((file) => ({
      filename: file.filename,
      uploadDate: file.uploadDate,
      size: file.length,
    }));

    res.json(videoFiles);
  } catch (error) {
    console.error("Error listing videos:", error);
    res
      .status(500)
      .json({ message: "Error listing videos", error: error.message });
  }
});

// Error handling middleware
router.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({
    message: "Internal server error",
    error: err.message,
  });
});

module.exports = router;
