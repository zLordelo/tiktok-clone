import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({likes, comments, saves, shares, user, description, musicName, videoUrl}) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handleStart(){

        if(play){
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }

    }

  return (
        <div className="video">
            <video 
                className="video-player"
                ref={videoRef}
                onClick={handleStart}
                src={videoUrl}
                loop
            ></video>

            <VideoSidebar 
                likes={likes}
                comments={comments}
                saves={saves}
                shares={shares}
            />
            <VideoFooter 
                user={user}
                description={description}
                musicName={musicName}
            />
            
        </div>
    )
}

export default Video;
