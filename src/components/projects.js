import React, { useRef } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Blop } from "./blop";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(26, 22, 23);
  overflow: hidden;

  z-index: 1;
  .title-wrapper {
    //poprawić wysokość
    position: absolute;
    transform: translatey(100%) rotate(0.005turn);

    h1 {
      width: 100%;
      left: 0em;
      font-size: 100px;
      color: #bd9154;
      letter-spacing: 0.1em;
      overflow: hidden;
      transform: translatex(
        ${(prop) => {
          return -(prop.scrollPosition - prop.containerTop) / 5;
        }}px
      );
      transition: 0.2s linear;
    }
  }
`;

export const ShowOff = (props) => {
  const containerRef = useRef(0);

  return (
    <Container
      scrollPosition={props.scrollPosition}
      containerTop={containerRef.current.offsetTop}
      ref={containerRef}
    >
      <div className="title-wrapper">
        <h1>Look at this cool 3d blop shit</h1>
      </div>

      <Canvas
        camera={{ position: [0, 0, 500] }}
        style={{
          left: "50%",
          transform: "translate(-50%)",
          position: "absolute",
        }}
      >
        <Blop blopScale={1} />
      </Canvas>
    </Container>
  );
};
