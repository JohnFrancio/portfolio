import React from "react";
import "../index.css";

function InfoBackground({ position }) {

  return (
    <div className="absolute top-[30%] left-0 right-0 mx-auto flex items-center justify-center">
      {/* Project Section */}
      <div className="info-section-wbg relative" style={{ transform: `translateX(${position * -50}px)` }}>
        <p>Hello, I'm <span className="font-poppins text-2xl animate-pulse">John Francio</span>, a Frontend JavaScript Developer</p>
        <p>Use the arrows to check out my projects as you explore space!</p>
        <p>Lets GO!!!</p>
        <img className="absolute -right-8 -top-24 md:-right-4 md:-top-28 rounded-full border-2 border-white w-32 h-32 md:w-60 md:h-60 object-cover" src="/assets/me.jpg" alt="me" />
      </div>
    </div>
  );
}

export default InfoBackground;
