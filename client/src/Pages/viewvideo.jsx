import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlayVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch list of videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/upload/list-interviews');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Handler to play a video
  const handlePlayVideo = (filename) => {
    setSelectedVideo(filename);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Interview Videos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Video List */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Video List</h2>
          {videos.length === 0 ? (
            <p>No videos found</p>
          ) : (
            <ul className="space-y-2">
              {videos.map((video) => (
                <li 
                  key={video.filename} 
                  className="p-2 border rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => handlePlayVideo(video.filename)}
                >
                  <div>{video.filename}</div>
                  <small>
                    Uploaded: {new Date(video.uploadDate).toLocaleString()}
                    {` | Size: ${(video.size / 1024 / 1024).toFixed(2)} MB`}
                  </small>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Video Player */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Video Player</h2>
          {selectedVideo ? (
            <video 
              controls 
              className="w-full border rounded"
              src={`/api/upload/get-interview/${selectedVideo}`}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Select a video to play</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayVideos;