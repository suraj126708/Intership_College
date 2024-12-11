const express = require('express');
const multer = require('multer');
const path = require('path');
const videoController = require('../controllers/videoController');

const router = express.Router();

const fs = require('fs');
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
        const videoDir = path.join(__dirname, '../uploads/videos');
        
        // Create directory if it doesn't exist
        if (!fs.existsSync(videoDir)){
            fs.mkdirSync(videoDir, { recursive: true });
        }
        
        cb(null, videoDir);
    },
    filename: (req, file, cb) => {
        // Generate unique filename with original extension
        cb(null, `video_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Allow only video files
        const allowedTypes = ['video/webm', 'video/mp4', 'video/x-matroska'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only WebM and MP4 are allowed.'), false);
        }
    },
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB file size limit
});

router.post('/save', upload.single('video'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No video file uploaded' });
        }

        res.status(201).json({ 
            message: 'Video saved successfully', 
            filename: req.file.filename 
        });
    } catch (error) {
        console.error('Video save error:', error);
        res.status(500).json({ message: 'Error saving video', error: error.message });
    }
});






// Route to get list of videos
router.get('/list', videoController.getVideos);

module.exports = router;