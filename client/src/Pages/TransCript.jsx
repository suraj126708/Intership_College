import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Forward, Rewind } from "lucide-react";

const VideoTranscriptPlayer = () => {
  // Video and playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeTranscriptIndex, setActiveTranscriptIndex] = useState(0);

  // Refs
  const videoRef = useRef(null);

  const videoUrl =
    "https://d1t11jpd823i7r.cloudfront.net/roleplay/CTA%20-%20Available%20now.mp4";

  const transcript = [
    {
      start: 0,
      end: 5,
      text: "Hello, my name is John Doe, and I'm excited to be interviewing for this position.",
    },
    {
      start: 5,
      end: 10,
      text: "I have been working in software development for the past five years, specializing in web applications and cloud technologies.",
    },
    {
      start: 10,
      end: 15,
      text: "My current role at TechInnovate involves leading a team of developers in creating scalable microservices architecture.",
    },
    {
      start: 15,
      end: 20,
      text: "I'm particularly passionate about continuous integration and deployment strategies.",
    },
    {
      start: 20,
      end: 25,
      text: "In my previous projects, I've implemented automated testing frameworks that reduced our deployment time by 40%.",
    },
  ];

  // Use provided transcript or default
  const currentTranscript = transcript.length > 0 ? transcript : null;

  // Video event handlers
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);

      // Find active transcript segment
      const activeIndex = currentTranscript.findIndex(
        (segment) => time >= segment.start && time < segment.end
      );

      if (activeIndex !== -1) {
        setActiveTranscriptIndex(activeIndex);

        // Scroll transcript to active segment
        const transcriptElement = document.getElementById(
          `transcript-${activeIndex}`
        );
        if (transcriptElement) {
          transcriptElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    }
  };

  // Playback controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  // Format time to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Video Player */}
        <div className="bg-black">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-auto"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={(e) => setDuration(e.target.duration)}
          />

          {/* Video Controls */}
          <div className="p-4 bg-gray-800 flex items-center space-x-4">
            <button
              onClick={handleRewind}
              className="text-white hover:bg-gray-700 p-2 rounded"
            >
              <Rewind />
            </button>

            <button
              onClick={togglePlay}
              className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full"
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>

            <button
              onClick={handleForward}
              className="text-white hover:bg-gray-700 p-2 rounded"
            >
              <Forward />
            </button>

            {/* Time display */}
            <div className="text-white ml-auto">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>

        {/* Continuous Transcript */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Interview Transcript
          </h2>

          <div className="h-[300px] overflow-y-auto space-y-4 text-lg leading-relaxed">
            {currentTranscript.map((segment, index) => (
              <p
                key={index}
                id={`transcript-${index}`}
                onClick={() => handleSeek(segment.start)}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  index === activeTranscriptIndex
                    ? "bg-blue-100 border-l-4 border-blue-500 font-semibold"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {segment.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTranscriptPlayer;
