import React, { useState, useRef, useEffect } from "react";
import {
  Camera,
  Mic,
  MicOff,
  PlayCircle,
  PauseCircle,
  StopCircle,
} from "lucide-react";
import axios from "axios";

// Embedded Question Sets
const interviewQuestionSets = {
  softwareDeveloper: [
    "Tell me about your programming experience",
    "What programming languages are you most comfortable with?",
    "Describe a challenging coding problem you solved",
    "How do you approach debugging complex issues?",
    "What are your strategies for learning new technologies?",
    "How do you handle code reviews?",
    "Explain a recent project you worked on",
    "What are your thoughts on test-driven development?",
    "How do you keep your coding skills updated?",
    "Describe your experience with version control systems",
  ],

  generalRole: [
    "Tell me about yourself",
    "What are your career goals?",
    "Why do you want this job?",
    "Describe a challenge you overcame",
    "Where do you see yourself in 5 years?",
    "What are your strengths and weaknesses?",
    "How do you handle stress and pressure?",
    "Describe your ideal work environment",
    "What motivates you professionally?",
    "How do you work in a team?",
  ],

  marketingPosition: [
    "Describe your marketing experience",
    "What digital marketing tools are you familiar with?",
    "How do you measure marketing campaign success?",
    "Describe a successful marketing strategy you implemented",
    "How do you stay updated with marketing trends?",
    "What social media platforms do you prefer for marketing?",
    "How do you handle negative feedback in marketing?",
    "Describe your content creation approach",
    "What analytics tools do you use?",
    "How do you target specific audience segments?",
  ],
};

// Utility function to get random questions
const getRandomQuestions = (questionSet, numQuestions = 5) => {
  const shuffled = [...questionSet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
};

const InterviewRecorder = ({
  questionSet = "generalRole",
  totalQuestions = 5,
}) => {
  // State management
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  // Video and audio stream refs
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);

  // Initialize camera and microphone
  const startMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      streamRef.current = stream;

      const chunks = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        setRecordedChunks(chunks);
      };
    } catch (err) {
      console.error("Error accessing media devices:", err);
    }
  };

  // Initialize questions on component mount
  useEffect(() => {
    const selectedQuestionSet =
      interviewQuestionSets[questionSet] || interviewQuestionSets.generalRole;
    const randomQuestions = getRandomQuestions(
      selectedQuestionSet,
      totalQuestions
    );
    setQuestions(randomQuestions);
    setCurrentQuestion(randomQuestions[0]);
    startMedia();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [questionSet, totalQuestions]);

  // Start recording
  const startRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  // Pause recording
  const pauseRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  // Resume recording
  const resumeRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
    }
  };

  // Stop recording and move to next question
  // const stopRecording = () => {
  //   if (mediaRecorderRef.current) {
  //     mediaRecorderRef.current.stop();
  //     setIsRecording(false);

  //     // Move to next question or complete interview
  //     const nextQuestionIndex = completedQuestions + 1;
  //     if (nextQuestionIndex < questions.length) {
  //       setCompletedQuestions(nextQuestionIndex);
  //       setCurrentQuestion(questions[nextQuestionIndex]);
  //     }
  //   }
  // };
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      // Convert recorded chunks to blob
      const blob = new Blob(recordedChunks, { type: "video/webm" });

      // Create FormData to send file
      const formData = new FormData();
      formData.append("video", blob, `interview_${Date.now()}.webm`);

      // Send video to backend
      axios
        .post(
          "https://intership-college.onrender.com/api/upload/upload-interview",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log("Video uploaded successfully");
          // Handle successful upload
        })
        .catch((error) => {
          console.error("Upload failed", error);
        });

      // Move to next question logic
      const nextQuestionIndex = completedQuestions + 1;
      if (nextQuestionIndex < questions.length) {
        setCompletedQuestions(nextQuestionIndex);
        setCurrentQuestion(questions[nextQuestionIndex]);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Video Recording Section */}
        <div className="relative w-full aspect-video bg-gray-200">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full h-full object-cover"
          />
          {isRecording && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Recording
            </div>
          )}
        </div>

        {/* Question Display */}
        <div className="p-4 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800">
            {currentQuestion || "Get ready to start"}
          </h2>
          <div className="mt-2 text-sm text-gray-600">
            Question {completedQuestions + 1} of {questions.length}
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center space-x-4 p-4 bg-white">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center"
            >
              <PlayCircle className="mr-2" /> Start
            </button>
          ) : (
            <>
              {!isPaused ? (
                <button
                  onClick={pauseRecording}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-full flex items-center"
                >
                  <PauseCircle className="mr-2" /> Pause
                </button>
              ) : (
                <button
                  onClick={resumeRecording}
                  className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center"
                >
                  <PlayCircle className="mr-2" /> Resume
                </button>
              )}
              <button
                onClick={stopRecording}
                className="bg-red-500 text-white px-6 py-2 rounded-full flex items-center"
              >
                <StopCircle className="mr-2" /> Stop
              </button>
            </>
          )}
        </div>

        {/* Microphone Status */}
        <div className="p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center">
            {isRecording ? (
              <Mic className="text-green-500 mr-2" />
            ) : (
              <MicOff className="text-red-500 mr-2" />
            )}
            <span>{isRecording ? "Microphone On" : "Microphone Off"}</span>
          </div>
          <div className="text-sm text-gray-600">
            Completed: {completedQuestions}/{questions.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewRecorder;
