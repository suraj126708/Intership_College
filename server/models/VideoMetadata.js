const mongoose = require('mongoose');

const videoMetadataSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  fileId: { type: mongoose.Schema.Types.ObjectId, required: true },
  uploadDate: { type: Date, default: Date.now },
  size: { type: Number }, // Size in bytes
  contentType: { type: String }, // e.g., 'video/mp4'
});

const VideoMetadata = mongoose.model('VideoMetadata', videoMetadataSchema);

module.exports = VideoMetadata;
