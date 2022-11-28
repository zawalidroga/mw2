import { Blop } from './components/blop';
import React from 'react';
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{position: [0, 0, 500]}}>
        <Blop />
      </Canvas>
    </div>
  );
}

export default App;
