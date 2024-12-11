import React, { useState, useEffect } from "react";
import axios from "axios";
import AdvancedVideoPlayer from "../components/AdvancedVideoPlayer";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch videos on component mount
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://intership-college.onrender.com/api/videos/list"
        );
        setVideos(response.data.videos);

        // Automatically select first video if available
        if (response.data.videos.length > 0) {
          setSelectedVideo(response.data.videos[0]);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4">Video Gallery</h2>

      {/* Selected Video Player */}
      {selectedVideo && (
        <div className="mb-4">
          <AdvancedVideoPlayer
            src={`intership-college-frontend.onrender.com/uploads/videos/${selectedVideo.filename}`}
            className="max-h-[500px] bg-black"
          />
          <p className="mt-2 text-center">{selectedVideo.filename}</p>
        </div>
      )}

      {/* Video Thumbnail Grid */}
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => setSelectedVideo(video)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <video
              src={`intership-college-frontend.onrender.com/uploads/videos/${video.filename}`}
              className="w-full h-32 object-cover"
            />
            <p className="text-sm mt-1 truncate">{video.filename}</p>
          </div>
        ))}
      </div>

      {videos.length === 0 && (
        <p className="text-center text-gray-500">No videos found</p>
      )}
    </div>
  );
};

export default VideoGallery;
