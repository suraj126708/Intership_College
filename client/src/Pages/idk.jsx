import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const VideoRecordertwo = () => {
    const [recording, setRecording] = useState(false);
    const [videoBlob, setVideoBlob] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const streamsRef = useRef(null);

    // Interview Questions
    const questions = [
        "Tell me about a project you're most proud of.",
        "What motivates you to excel in your work?",
        "How do you handle challenges in a team environment?",
        "Where do you see yourself professionally in the next five years?",
        "What unique skills do you bring to this role?"
    ];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const startRecording = async () => {
        try {
            // Request camera and microphone access
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: true, 
                audio: true 
            });

            // Set video source to live stream
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }

            // Store stream to stop later
            streamsRef.current = stream;

            // Setup media recorder
            mediaRecorderRef.current = new MediaRecorder(stream, { 
                mimeType: 'video/webm' 
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
                const blob = new Blob(chunks, { type: 'video/webm' });
                setVideoBlob(blob);

                // Create object URL to preview
                const videoURL = URL.createObjectURL(blob);
                videoRef.current.srcObject = null;
                videoRef.current.src = videoURL;
            };

            // Start recording
            mediaRecorderRef.current.start();
            setRecording(true);
        } catch (error) {
            console.error('Error starting recording:', error);
            alert('Error accessing camera/microphone: ' + error.message);
        }
    };

    const stopRecording = () => {
        // Stop all streams
        if (streamsRef.current) {
            streamsRef.current.getTracks().forEach(track => track.stop());
        }

        // Stop media recorder
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        setRecording(false);
    };

    const pauseResumeRecording = () => {
        if (mediaRecorderRef.current) {
            if (isPaused) {
                mediaRecorderRef.current.resume();
                setIsPaused(false);
            } else {
                mediaRecorderRef.current.pause();
                setIsPaused(true);
            }
        }
    };

    const saveVideo = async () => {
        if (!videoBlob) return;

        const formData = new FormData();
        formData.append('video', videoBlob, 'recording.webm');
        try {
            const response = await axios.post('http://127.0.0.1:8080/api/videos/save', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            console.log('Save response:', response);
            alert('Video saved successfully!');
            // Clear the current video
            setVideoBlob(null);
            videoRef.current.src = '';
        } catch (error) {
            console.error('Error saving video:', error);
            alert('Failed to save video: ' + error.message);
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    // Ensure video starts playing when stream is available
    useEffect(() => {
        const videoElement = videoRef.current;
        
        const playVideo = () => {
            if (videoElement) {
                videoElement.play().catch(error => {
                    console.error('Error playing video:', error);
                });
            }
        };

        if (videoElement) {
            videoElement.addEventListener('loadedmetadata', playVideo);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('loadedmetadata', playVideo);
            }
        };
    }, [recording]);

    return (
        <div className="bg-white min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-blue-50 rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                    Video Interview
                </h2>
                
                {/* Video Preview with Live Feed During Recording */}
                <div className="mb-6 border-4 border-blue-500 rounded-lg overflow-hidden">
                    <video 
                        ref={videoRef} 
                        autoPlay 
                        playsInline
                        muted
                        className="w-full bg-black"
                        style={{ 
                            display: recording ? 'block' : 'none',
                            maxHeight: '400px',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                {/* Current Question Display */}
                {recording && (
                    <div className="bg-blue-100 p-4 rounded-lg mb-6 text-center">
                        <p className="text-xl font-semibold text-blue-800">
                            {questions[currentQuestionIndex]}
                        </p>
                    </div>
                )}

                {/* Recording Controls */}
                <div className="flex justify-center space-x-4">
                    {!recording ? (
                        <button 
                            onClick={startRecording}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Start Recording
                        </button>
                    ) : (
                        <div className="flex space-x-4">
                            {/* Pause/Resume Button */}
                            <button 
                                onClick={pauseResumeRecording}
                                className={`px-6 py-3 rounded-lg transition duration-300 ${
                                    isPaused 
                                    ? 'bg-green-500 text-white hover:bg-green-600' 
                                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
                                }`}
                            >
                                {isPaused ? 'Resume' : 'Pause'}
                            </button>

                            {/* Next/Stop Question Buttons */}
                            {currentQuestionIndex < questions.length - 1 ? (
                                <button 
                                    onClick={nextQuestion}
                                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Next Question
                                </button>
                            ) : (
                                <button 
                                    onClick={() => {
                                        stopRecording();
                                        saveVideo();
                                    }}
                                    className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
                                >
                                    Finish Interview
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Question Progress Indicator */}
                {recording && (
                    <div className="mt-4 flex justify-center space-x-2">
                        {questions.map((_, index) => (
                            <div 
                                key={index} 
                                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                                    index <= currentQuestionIndex 
                                    ? 'bg-blue-600' 
                                    : 'bg-blue-200'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoRecordertwo;