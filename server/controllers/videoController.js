const fs = require('fs');
const path = require('path');

// Ensure videos directory exists
const videoDir = path.join(__dirname, '../uploads/videos');
if (!fs.existsSync(videoDir)){
    fs.mkdirSync(videoDir, { recursive: true });
}

// Controller for saving video
exports.saveVideo = async (req, res) => {
    try {
        // If no file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No video file uploaded' });
        }

        // Generate a unique filename
        const filename = `video_${Date.now()}.webm`;
        const filepath = path.join(videoDir, filename);

        // Move the uploaded file to the videos directory
        await fs.promises.rename(req.file.path, filepath);

        res.status(201).json({ 
            message: 'Video saved successfully', 
            filename: filename 
        });
    } catch (error) {
        console.error('Video save error:', error);
        res.status(500).json({ message: 'Error saving video', error: error.message });
    }
};

// Controller for getting list of videos
exports.getVideos = async (req, res) => {
    try {
        const files = await fs.promises.readdir(videoDir);
        const videoFiles = files.filter(file => 
            ['.webm', '.mp4', '.avi','.mkv'].includes(path.extname(file).toLowerCase())
        );

        res.status(200).json({ 
            videos: videoFiles.map(file => ({
                filename: file,
                path: `../uploads/videos/${file}`
            }))
        });
    } catch (error) {
        console.error('Error fetching videos:', error);
        res.status(500).json({ message: 'Error retrieving videos', error: error.message });
    }
};