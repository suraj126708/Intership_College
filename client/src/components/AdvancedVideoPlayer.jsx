// AdvancedVideoPlayer Component
import React, { useState, useRef, useEffect } from 'react';

const AdvancedVideoPlayer = ({ src, className = '' }) => {
    const videoRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [buffering, setBuffering] = useState(false);
    const seekTimeoutRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handleLoadStart = () => {
            setIsLoading(true);
            setBuffering(true);
        };

        const handleLoadedMetadata = () => {
            setIsLoading(false);
        };

        const handleCanPlay = () => {
            setIsLoading(false);
            setBuffering(false);
        };

        const handleWaiting = () => {
            setBuffering(true);
        };

        const handlePlaying = () => {
            setBuffering(false);
        };

        const handleSeeking = () => {
            if (seekTimeoutRef.current) {
                clearTimeout(seekTimeoutRef.current);
            }

            setBuffering(true);
            videoElement.pause();

            seekTimeoutRef.current = setTimeout(() => {
                console.warn('Seek operation taking too long');
                setBuffering(false);
                videoElement.play();
            }, 5000);
        };

        const handleSeeked = () => {
            if (seekTimeoutRef.current) {
                clearTimeout(seekTimeoutRef.current);
            }
            setBuffering(false);
            videoElement.play();
        };

        const handleProgress = () => {
            const buffered = videoElement.buffered;
            const currentTime = videoElement.currentTime;

            for (let i = 0; i < buffered.length; i++) {
                if (currentTime >= buffered.start(i) && currentTime <= buffered.end(i)) {
                    setBuffering(false);
                    return;
                }
            }

            setBuffering(true);
        };

        videoElement.addEventListener('loadstart', handleLoadStart);
        videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
        videoElement.addEventListener('canplay', handleCanPlay);
        videoElement.addEventListener('waiting', handleWaiting);
        videoElement.addEventListener('playing', handlePlaying);
        videoElement.addEventListener('seeking', handleSeeking);
        videoElement.addEventListener('seeked', handleSeeked);
        videoElement.addEventListener('progress', handleProgress);

        return () => {
            if (seekTimeoutRef.current) {
                clearTimeout(seekTimeoutRef.current);
            }
            videoElement.removeEventListener('loadstart', handleLoadStart);
            videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
            videoElement.removeEventListener('canplay', handleCanPlay);
            videoElement.removeEventListener('waiting', handleWaiting);
            videoElement.removeEventListener('playing', handlePlaying);
            videoElement.removeEventListener('seeking', handleSeeking);
            videoElement.removeEventListener('seeked', handleSeeked);
            videoElement.removeEventListener('progress', handleProgress);
        };
    }, [src]);

    const handlePlay = async () => {
        try {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            setBuffering(true);

            await videoElement.play();

            setTimeout(() => {
                if (videoElement.paused) {
                    console.warn('Playback failed after play attempt');
                    setBuffering(false);
                }
            }, 500);
        } catch (error) {
            console.error('Playback error:', error);
            setBuffering(false);
        }
    };

    return (
        <div className="relative w-full">
            {(isLoading || buffering) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-white mb-4"></div>
                        <span className="text-white text-sm">
                            {isLoading ? 'Loading...' : 'Buffering...'}
                        </span>
                    </div>
                </div>
            )}

            <video
                ref={videoRef}
                src={src}
                controls
                onPlay={handlePlay}
                className={`w-full ${className}`}
                preload="metadata"
                playsInline
                disablePictureInPicture
                onError={(e) => {
                    console.error('Video playback error:', e);
                    setBuffering(false);
                    setIsLoading(false);
                }}
            />
        </div>
    );
};

export default AdvancedVideoPlayer;

