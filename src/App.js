import { Blop } from "./components/blop";
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import Header from "./components/header";
import FrontPage from "./components/front-page/front-page";
import PicassoCanvas from "./components/canvas/canvas";
import Circle, { circleConf } from "./components/canvas/circle";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [aboutPosition, setAboutPosition] = useState(8888);
  const [aboutWidth, setAboutWidth] = useState(9999);
  const circleArrRef = useRef([]);
  const circleArr = circleArrRef.current;
  const circlePosRef = useRef([]);
  const circlePos = circlePosRef.current;

  const circlesMaker = () => {
    const offset = circleArr.length;
    for (let i = 0; i < 100; i++) {
      circlePos.push({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      circleArr.push(new Circle(circlePos[i + offset], circleConf));
    }
  };

  const clickHandler = () => {
    circlesMaker();
    setIsClicked(true);

    document.body.classList.add("enable-scrolling");
  };

  const scrollPosHandler = () => {
    setScrollPosition(window.scrollY);
  };

  const positionHandler = (position, width) => {
    setAboutPosition(position);
    setAboutWidth(width);
  };

  useEffect(() => {
    document.addEventListener("scroll", (e) => scrollPosHandler());
  }, [scrollPosition]);

  return (
    <div className="App">
      <Header isClicked={isClicked} />
      <PicassoCanvas
        circleArr={circleArr}
        scrollPosition={scrollPosition}
        aboutPosition={aboutPosition}
        aboutWidth={aboutWidth}
      />
      <div className="front-wrapper">
        <FrontPage
          clickHandler={clickHandler}
          isClicked={isClicked}
          scrollPosition={scrollPosition}
        />
      </div>
      <About aboutPosition={positionHandler} isClicked={isClicked} />
      <Skills />
    </div>
  );
}

export default App;
