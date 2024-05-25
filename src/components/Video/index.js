import React from "react";
import "./index.css";
import video from "./WhatsApp Video 2024-05-20 at 7.12.52 PM.mp4";
const Video = () => {
  return (
    <div className="w-100 vidContainer">
      <video
        src={video}
        autoPlay
        type="video/mp4"
        style={{ width: "100%"}}
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
