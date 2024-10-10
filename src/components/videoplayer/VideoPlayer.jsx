import { useEffect, useRef } from 'react';
import cloudinary from 'cloudinary-video-player/all';
import 'cloudinary-video-player/cld-video-player.min.css';
import "cloudinary-video-player/cld-video-player.min.css";
import 'cloudinary-video-player/chapters';
import 'cloudinary-video-player/playlist';


const VideoPlayer = ({ playerRef, videoSrc }) => {
    const cloudinaryRef = useRef();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!cloudinaryRef.current) {
                cloudinaryRef.current = cloudinary;
            }

            const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
                cloud_name: 'dgnb2e0te',
                secure: true,
                controls: true,
            });
            player.source(videoSrc);
        }
    }, [videoSrc]);

    return <div ref={playerRef} className="video-player"
    style={{ width: '100%', height: '400px' }} />;
};

export default VideoPlayer;
