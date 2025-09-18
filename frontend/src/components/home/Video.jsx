import React from "react";

const Video = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        src="/images/videoNav.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Video;
