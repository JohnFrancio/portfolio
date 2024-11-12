import { Canvas, useFrame } from "@react-three/fiber"
import { SpaceShip } from "./components/SpaceShip";
import Stars from "./components/Stars";

function App() {

  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <SpaceShip/>
      <Stars/>
      <ambientLight intensity={0.9} color="#fff" />
    </Canvas>
  )
}

export default App
