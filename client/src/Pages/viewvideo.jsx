import React, { useState, useEffect } from "react";
import axios from "axios";
import { TrashIcon } from "@heroicons/react/outline";

const PlayVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch list of videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://intership-college.onrender.com/api/upload/list-interviews"
        );
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Handler to play a video
  const handlePlayVideo = (filename) => {
    setSelectedVideo(filename);
  };

  // Handler to delete a video
  const handleDeleteVideo = async (filename) => {
    try {
      await axios.delete(
        `https://intership-college.onrender.com/api/upload/delete-interview/${filename}`
      );
      // Remove the video from the state after deletion
      setVideos(videos.filter((video) => video.filename !== filename));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
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
                  className="p-2 border rounded hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                >
                  <div onClick={() => handlePlayVideo(video.filename)}>
                    {video.filename}
                  </div>
                  <small>
                    Uploaded: {new Date(video.uploadDate).toLocaleString()}
                    {` | Size: ${(video.size / 1024 / 1024).toFixed(2)} MB`}
                  </small>
                  {/* Delete Button with Icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteVideo(video.filename);
                    }}
                    className="text-red-500 ml-4 hover:text-red-700"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
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
              src={`intership-college-frontend.onrender.com//api/upload/get-interview/${selectedVideo}`}
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
