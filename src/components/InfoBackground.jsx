import React from "react";
import "../index.css";

function InfoBackground({ shipPosition }) {
  const infoSections = [
    { title: "Welcome to My Portfolio", description: "Check out my projects as you explore space!" },
    { title: "Project 1: UniDown", description: "A video downloader supporting multiple platforms." },
    { title: "Project 2: React 3D Experience", description: "Interactive 3D scenes using React Three Fiber." },
    { title: "Project 3: AI Chatbot", description: "Building intelligent chatbots using AI technologies." },
    { title: "Project 4: Full-Stack Web App", description: "Developing scalable web applications with React and Node.js." }
  ];

  return (
    <div className="info-background">
      {infoSections.map((section, index) => (
        <div
          key={index}
          className="info-section"
          style={{
            transform: `translateX(${shipPosition * -50}px)`, // Move info based on ship position
            left: `${index * 300}px`, // Position each section horizontally
          }}
        >
          <h1>{section.title}</h1>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoBackground;
