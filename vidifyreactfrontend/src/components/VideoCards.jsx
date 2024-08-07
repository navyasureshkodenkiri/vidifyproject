import React, { useState, useEffect, useRef } from "react";
import API from "../services/Api";


        

export default function VideoCards({ videos }) {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = (index) => {
    const timeout = setTimeout(() => {
      setHoveredVideo(index);
    }, 3000); // 3 seconds

    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setHoveredVideo(null);
  };

  return (
    <div className="VideoCards">
      {videos.map((video, index) => (
        <div
          key={index}
          className="videoCard"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredVideo === index ? (
            <video
              src={API.main + video.file_path}
              width="100%"
              height="100%"
              autoPlay
              muted
            />
          ) : (
            <img
              src={API.main + video.thumbnail_path}
              alt={video.title}
              width="100%"
              height="100%"
            />
          )}
          {hoveredVideo === index ? null : (
            <div className="videoInfo">
              <span>{video.title}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
