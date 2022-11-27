import React from "react";
import "./Video.css";
import ReactPlayer from "react-player";

function Video() {
    return (
        <>
            <div className="heading-bar">
                <span className="head">Video Analytics</span>
            </div>
            <div id="underline"></div>
            <div className="video-section">
                <ReactPlayer
                className="badminton-video"
                controls
                autoPlay
                width="500px" 
                height="600px" 
                url="https://www.youtube.com/watch?v=HucIqi8Lw3E"
                onReady={()=>console.log("onReady Callback")}
                onStart={()=>console.log("onStart Callback")}
                onPause={()=>console.log("onPause Callback")}
                onEnded={()=>console.log("onEnded Callback")}
                onError={()=>console.log("onError Callback")}
                />
            </div>
        </>
    )
}
export default Video;