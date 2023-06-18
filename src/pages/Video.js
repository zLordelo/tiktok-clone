import React, { useRef, useState } from "react";
import "./Video.css";
import Download from "../assets/Download.mp4"
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video() {

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
                src={Download}
                loop
            ></video>

            <VideoSidebar />
            <VideoFooter />
            
        </div>
    )
}

export default Video;
