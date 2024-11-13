// import { Canvas, useFrame } from "@react-three/fiber"
// import { SpaceShip } from "./components/SpaceShip";
// import Stars from "./components/Stars";
// import { useEffect, useState } from "react";

// function App() {
//   return (
//     <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <SpaceShip position={position} />
//         <Stars />
//         <ambientLight intensity={0.9} color="#fff" />
//       </Canvas>
//     </div>
//   );
// }
// export default App

import { Canvas } from "@react-three/fiber";
import { SpaceShip } from "./components/SpaceShip";
import Stars from "./components/Stars";
import InfoBackground from "./components/InfoBackground";
import { useState } from "react";

function App() {
  const [shipPosition, setShipPosition] = useState(0);

  // Handle navigation
  const handleNavigation = (direction) => {
    if (direction === "left") {
      setShipPosition(shipPosition - 2); // Move left
    } else if (direction === "right") {
      setShipPosition(shipPosition + 2); // Move right
    }
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <SpaceShip shipPosition={shipPosition} />
        <Stars />
        <ambientLight intensity={0.9} color="#fff" />
      </Canvas>

      <InfoBackground shipPosition={shipPosition} />

      {/* Navigation Buttons */}
      <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
        <button onClick={() => handleNavigation("left")}>Left</button>
        <button onClick={() => handleNavigation("right")}>Right</button>
      </div>
    </div>
  );
}

export default App;

