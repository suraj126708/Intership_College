import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const VideoRecordertwo = () => {
    const [recording, setRecording] = useState(false);
    const [videoBlob, setVideoBlob] = useState(null);
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const streamsRef = useRef(null);
    const chunksRef = useRef([]);

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
        // Reset previous recording state
        chunksRef.current = [];
        setVideoBlob(null);

        try {
            console.log('Starting recording...');
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
            mediaRecorderRef.current.ondataavailable = (e) => {
                console.log('Data available:', e.data.size);
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };

            // When recording stops, create video blob
            mediaRecorderRef.current.onstop = () => {
                console.log('Recording stopped. Total chunks:', chunksRef.current.length);
                const blob = new Blob(chunksRef.current, { type: 'video/webm' });
                
                // Log blob details
                console.log('Blob created:', {
                    size: blob.size,
                    type: blob.type
                });
                
                // Only set blob if chunks exist
                if (chunksRef.current.length > 0) {
                    setVideoBlob(blob);
                }

                // Clean up stream
                if (streamsRef.current) {
                    streamsRef.current.getTracks().forEach(track => track.stop());
                }
            };

            // Start recording
            mediaRecorderRef.current.start();
            setRecording(true);
            setCurrentQuestionIndex(0);
        } catch (error) {
            console.error('Error starting recording:', error);
            alert('Error accessing camera/microphone: ' + error.message);
        }
    };

    const stopRecording = async () => {
        console.log('Stopping recording...');
        // Stop media recorder
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        setRecording(false);

        // Delay to ensure onstop handler completes
        setTimeout(() => {
            if (chunksRef.current.length > 0) {
                const blob = new Blob(chunksRef.current, { type: 'video/webm' });
                saveVideo(blob);
            } else {
                console.error('No chunks available to save');
            }
        }, 100);
    };

    const saveVideo = async (blob) => {
        console.log('Attempting to save video', {
            blobSize: blob.size,
            blobType: blob.type
        });

        if (!blob) {
            console.error('No blob to save');
            return;
        }

        const formData = new FormData();
        formData.append('video', blob, 'recording.webm');
        
        try {
            console.log('Sending request to backend...');
            const response = await axios.post('https://intership-college.onrender.com/api/videos/save', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                // Add timeout to check for potential network issues
                timeout: 10000
            });

            console.log('Save response:', response);
            alert('Video saved successfully!');
            
            // Reset video preview and state
            if (videoRef.current) {
                videoRef.current.srcObject = null;
                videoRef.current.src = '';
            }
            
            // Reset chunks and blob
            chunksRef.current = [];
            setVideoBlob(null);
            setCurrentQuestionIndex(0);
        } catch (error) {
            console.error('Full error details:', error);
            
            // More detailed error logging
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request
                console.error('Error setting up request:', error.message);
            }
            
            alert('Failed to save video: ' + (error.response?.data || error.message));
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
                                    onClick={stopRecording}
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