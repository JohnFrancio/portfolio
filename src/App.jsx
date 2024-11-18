import { Canvas, useFrame } from "@react-three/fiber";
import { SpaceShip } from "./components/SpaceShip";
import Stars from "./components/Stars";
import InfoBackground from "./components/InfoBackground";
import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left, 0 for stop

  // Handle automatic movement
  useEffect(() => {
    let animationFrame;

    const moveShip = () => {
      setPosition((prev) => {
        const newPos = prev + direction * 0.001; // Adjust speed (0.01) for smooth movement
        return Math.max(0, Math.min(newPos, 2)); // Keep position between 0 and 3 (or adjust based on the number of sections)
      });
      animationFrame = requestAnimationFrame(moveShip);
    };

    if (direction !== 0) {
      animationFrame = requestAnimationFrame(moveShip);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [direction]);

  // Toggle movement when buttons are clicked
  const handleRightClick = () => {
    setDirection((prev) => (prev === 1 ? 0 : 1)); // Toggle right movement
  };

  const handleLeftClick = () => {
    setDirection((prev) => (prev === -1 ? 0 : -1)); // Toggle left movement
  };

  return (
    <div className="font-doto font-bold text-xl w-[100vw] h-[100vh] relative">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <SpaceShip position={position} />
        <Stars />
        <ambientLight intensity={0.9} color="#fff" />
        {/* <OrbitControls/> */}
      </Canvas>
      <InfoBackground position={position} />
      <div className="absolute bottom-20 left-[38%] md:left-[45%] flex items-center justify-center gap-5">
        <button onClick={handleLeftClick}><FaArrowLeft className="fill-white" size={32}/></button>
        <button onClick={handleRightClick}><FaArrowRight className="fill-white" size={32}/></button>
      </div>
    </div>
  );
}

export default App;
