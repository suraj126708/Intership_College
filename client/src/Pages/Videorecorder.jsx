import React, { useState, useRef } from "react";
import axios from "axios";

const VideoRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamsRef = useRef([]);

  const startRecording = async () => {
    try {
      // Request camera and microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      // Store stream to stop later
      streamsRef.current = stream.getTracks();

      // Setup media recorder
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });

      // Collect recorded chunks
      const chunks = [];
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      // When recording stops, create video blob
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        setVideoBlob(blob);

        // Create object URL to preview
        const videoURL = URL.createObjectURL(blob);
        videoRef.current.src = videoURL;
      };

      // Start recording
      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    // Stop all streams
    streamsRef.current.forEach((track) => track.stop());

    // Stop media recorder
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const saveVideo = async () => {
    if (!videoBlob) return;

    const formData = new FormData();
    formData.append("video", videoBlob, "recording.webm");

    try {
      const response = await axios.post(
        "https://intership-college.onrender.com/api/videos/save",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Video saved successfully!");
      // Optional: clear the current video
      setVideoBlob(null);
      videoRef.current.src = "";
    } catch (error) {
      console.error("Error saving video:", error);
      alert("Failed to save video");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Video Recorder</h2>

      {/* Video Preview */}
      <video
        ref={videoRef}
        controls
        className="w-full mb-4 bg-black"
        style={{ display: videoBlob ? "block" : "none" }}
      />

      {/* Recording Controls */}
      <div className="flex space-x-2">
        {!recording ? (
          <button
            onClick={startRecording}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop Recording
          </button>
        )}

        {videoBlob && (
          <button
            onClick={saveVideo}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Video
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
