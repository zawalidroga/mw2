import { Blop } from "./components/blop";
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { About } from "./components/about";
import FrontPage from "./components/front-page";
import PicassoCanvas from "./components/canvas/canvas";
import Circle from "./components/canvas/circle";

function App() {
  const circleArr = [];
  const circlePosRef = useRef([]);
  const circlePos = circlePosRef.current;

  const clickHandler = () => {
    const offset = circleArr.length;
    for (let i = 0; i < 100; i++) {
      circlePos.push({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      circleArr.push(new Circle(circlePos[i + offset]));
    }
  };
  return (
    <div className="App">
      <PicassoCanvas circleArr={circleArr} />
      <FrontPage clickHandler={clickHandler} />
    </div>
  );
}

export default App;
