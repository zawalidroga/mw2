import { Blop } from "./components/blop";
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import Header from "./components/header";
import FrontPage from "./components/front-page/front-page";
import PicassoCanvas from "./components/canvas/canvas";
import Circle, { circleConf } from "./components/canvas/circle";
import { ShowOff } from "./components/projects";
import { Contact } from "./components/contact";
import { Blog } from "./components/blog/blog";
import styled from "styled-components";

const Transition = styled.div`
  width: 100vw;
  height: 120vh;
  background-color: #faa41b;

  .circle {
    bottom: 0;
    left: 50%;
    transform: translatex(-50%)
      scale(
        ${(prop) => {
          if (prop.scrollPos - prop.topPos + 1300 < 0) {
            return 0;
          } else if (prop.scrollPos > 2500) {
            return 38;
          } else {
            return (prop.scrollPos - prop.topPos + 1300) / 10;
          }
        }}
      );
    position: ${(prop) => {
      return prop.scrollPos > 2500 ? "relative" : "fixed";
    }};
    width: 100px;
    height: 50px;
    border-radius: 150px 150px 0 0;
    background-color: #faa41b;
    z-index: 4;
    transition: linear 0.1s;
  }
  /* .transition-body {
    height: 400px;
    background-color: #faa41b;
  } */
`;

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [aboutPosition, setAboutPosition] = useState(8888);
  const [aboutWidth, setAboutWidth] = useState(9999);
  const circleArrRef = useRef([]);
  const circleArr = circleArrRef.current;
  const circlePosRef = useRef([]);
  const circlePos = circlePosRef.current;
  const transitRef = useRef(0);
  const transitDiv = transitRef.current;

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
      <ShowOff scrollPosition={scrollPosition} />
      <Transition
        className="transition-wrapper"
        scrollPos={scrollPosition}
        topPos={transitDiv.offsetTop}
        height={transitDiv.offsetHeight}
        ref={transitRef}
      >
        <div className="circle"></div>
        <div className="transition-body"></div>
      </Transition>
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
