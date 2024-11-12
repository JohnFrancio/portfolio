import React from "react";
import "../index.css";

function InfoSlides({ scrollProgress }) {
  return (
    <div className="info-container">
      <div className="slide" style={{ opacity: 1 - scrollProgress }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Check out my projects as you scroll through space!</p>
      </div>
      <div className="slide" style={{ opacity: scrollProgress }}>
        <h1>Project 1: UniDown</h1>
        <p>A video downloader supporting multiple platforms.</p>
      </div>
      <div className="slide" style={{ opacity: scrollProgress - 0.5 }}>
        <h1>Project 2: React 3D Experience</h1>
        <p>Interactive 3D scenes using React Three Fiber.</p>
      </div>
    </div>
  );
}

export default InfoSlides;
