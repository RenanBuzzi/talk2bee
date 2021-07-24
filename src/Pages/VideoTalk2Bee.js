import React from "react";
import "../Pages/VideoTalk2Bee.css";
import ReactPlayer from "react-player";

const VideoTalk2Bee = () => {
  return (
    <div className="displayVideo">
      <ReactPlayer playing={true} url="https://youtu.be/Xi945wiKB_k" />
    </div>
  );
};

export default VideoTalk2Bee;
