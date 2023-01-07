import { Blop } from "./components/blop";
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { About } from "./components/about";
import Header from "./components/header";
import FrontPage from "./components/front-page";
import PicassoCanvas from "./components/canvas/canvas";
import Circle, { circleConf } from "./components/canvas/circle";
function App() {
  const isClickedRef = useRef(false);

  const [isClicked, setIsClicked] = useState(false);
  const circleArrRef = useRef([]);
  const circleArr = circleArrRef.current;
  const circlePosRef = useRef([]);
  const circlePos = circlePosRef.current;

  const testo = () => {};

  const clickHandler = () => {
    const offset = circleArr.length;
    for (let i = 0; i < 100; i++) {
      circlePos.push({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      circleArr.push(new Circle(circlePos[i + offset], circleConf));
    }
    setIsClicked(true);
  };
  return (
    <div className="App">
      <Header isClicked={isClicked} />
      <PicassoCanvas circleArr={circleArr} />
      <FrontPage clickHandler={clickHandler} testo={testo} />
    </div>
  );
}

export default App;
