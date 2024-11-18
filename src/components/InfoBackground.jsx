import React, { useState } from "react";
import "../index.css";

function InfoBackground({ position }) {

  const [index, setIndex] = useState(0);

  const projects = [
    {
      name: "Drone",
      image: "/assets/Pdrone.png",
      descri: "Discover our premium range of drones designed to capture breathtaking aerial views. Whether you're a professional filmmaker or a hobbyist, our drones offer cutting-edge technology for smooth, high-resolution footage, ensuring you never miss a moment. Explore our collection and elevate your perspective with the best tools for stunning aerial photography and videography.",
      date: "2024",
      link: "https://drone-two-liard.vercel.app",
    },
    {
      name: "MNTN",
      image: "/assets/Pmntn.png",
      descri: "Embark on unforgettable adventures with our expert hiking guides. Whether you're a seasoned trekker or new to the trails, we offer personalized experiences that lead you through the most scenic routes, hidden gems, and breathtaking vistas. Let us guide you to explore nature's beauty safely and enjoyably, turning every hike into a memorable journey.",
      date: "2024",
      link: "https://mntn-orpin.vercel.app",
    },
    {
      name: "Game Warrior",
      image: "/assets/Pgame.png",
      descri: "Stay ahead of the game with our ultimate hub for gaming discovery and news. Dive into the latest releases, exclusive updates, and deep-dive reviews of trending games. From AAA titles to indie gems, we bring you the hottest news, insights, and gameplay previews, keeping you in the loop and ready to level up your gaming experience.",
      date: "2024",
      link: "https://game-warrior.vercel.app",
    },
  ]

  return (
    <div className="absolute top-[25%] w-[80%] left-0 right-0 mx-auto flex flex-row gap-56" style={{ transform: `translateX(${-position * 100}vw)` }}>
      {/* Project Section */}
      {/* Introduction */}
      <div className="info-section-wbg w-[80%] lg:w-[100%] relative flex-shrink-0">
        <p>Hello, I'm <span className="font-poppins text-2xl animate-pulse">John Francio</span>, a Frontend JavaScript Developer</p>
        <p>Use the arrows to check out my projects as you explore space!</p>
        <p>Lets GO!!!</p>
        <img className="absolute -right-8 -top-24 md:-right-36 md:-top-28 lg:right-16 lg:-top-28 rounded-full border-2 border-white w-32 h-32 md:w-60 md:h-60 object-cover" src="/assets/me.jpg" alt="me" />
      </div>

      {/* Project */}
      <div className="text-white w-[100%] -top-20 relative flex-shrink-0">
        <h1 className="text-2xl text-center font-poppins mb-3">My Projects</h1>
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="bg-bg_info text-white p-[20px] rounded-[10px] flex flex-col gap-4">
            {projects.map((project, i) => (
              <div key={i} className="cursor-pointer" onClick={() => setIndex(i)}>
                <h3 className="underline font-bold text-xl font-poppins">{project.name}</h3>
                <p>{project.date}</p>
              </div>
            ))}
          </div>
          <div className="w-[45%]">
            <img className="h-64 object-cover" src={projects[index].image} alt={projects[index].name} />
          </div>
          <div className="w-[45%]">
            <p className="font-light font-poppins">{projects[index].descri}</p>
            <h3 className="underline font-bold text-xl font-doto">Link:</h3>
            <a href={projects[index].link} className="font-light font-poppins">{projects[index].link}</a>
          </div>
        </div>
      </div>

      {/* test */}
      <div className="info-section w-[100%] relative flex-shrink-0">
        <h1>test</h1>
      </div>
    </div>
  );
}

export default InfoBackground;
