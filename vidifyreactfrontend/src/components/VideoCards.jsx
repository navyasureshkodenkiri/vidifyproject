import React, { useState } from "react";
import API from "../services/Api";

export default function VideoCards({ videos }) {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredVideo(index);
  };

  const handleMouseLeave = () => {
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
            <video src={API.main+video.file_path} width="100%" height="100%" autoPlay/>
          ) : (
            <img src={API.main+video.thumbnail_path} alt={video.title} width="100%" height="100%" />
          )}
          <div className="videoInfo">
            <h3>{video.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
