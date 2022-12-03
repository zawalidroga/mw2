import { Blop } from './components/blop';
import React, {useState} from 'react';
import { Canvas } from "@react-three/fiber";


function App() {
  const [ blopScale, setBlopScale ] = useState(1);

  const hoverHandle = (e) => {
   e ? setBlopScale(1.5) : setBlopScale(1)
  }

  const clickHandle = () =>{
    console.log('click')
  }
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{position: [0, 0, 500]}}>
        <Blop blopScale={blopScale} />
      </Canvas>
      <div 
      className='hover-clover' 
      onMouseOver={() => hoverHandle(true)} 
      onMouseLeave={() => hoverHandle(false)}
      onClick={clickHandle}
      ></div>
    </div>
  );
}

export default App;
