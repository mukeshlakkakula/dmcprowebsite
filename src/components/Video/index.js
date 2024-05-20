import React from "react";
import "./index.css";
import video from "./React App - Google Chrome 2023-09-03 18-31-03.mp4";
const Video = () => {
  return (
    <div className="w-100 vidContainer">
      <video
        src={video}
        autoPlay
        type="video/mp4"
        style={{ width: "100%" }}
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
