import { Canvas, useFrame } from "@react-three/fiber"
import { SpaceShip } from "./components/SpaceShip";
import Stars from "./components/Stars";
import { useEffect, useState } from "react";
import InfoSlides from "./components/InfoSlides";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    console.log("scrollTop:", scrollTop, "maxScroll:", maxScroll);
    const progress = parseInt(scrollTop) / parseInt(maxScroll);
    console.log(progress);
    setScrollProgress(progress);
  };

  useEffect(() => {
    console.log(scrollProgress);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.log("Adding scroll event listener");
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }
  // }, []);
  

  return (
    <>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <SpaceShip scrollProgress={scrollProgress}/>
        <Stars/>
        <ambientLight intensity={0.9} color="#fff" />
      </Canvas>
      <InfoSlides scrollProgress={scrollProgress} />
    </>
  )
}

export default App
