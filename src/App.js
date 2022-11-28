import { Blop } from './components/blop';
import React from 'react';
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Blop />
      </Canvas>
    </div>
  );
}

export default App;
