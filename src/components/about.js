import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Anime, { anime } from "react-anime";

const ContainerAbout = styled.div`
  width: 100%;
  position: absolute;
  bottom: calc(-100% - 22em);
  color: rgb(235, 223, 197);
  transform: translatey(${(props) => (props.isClicked ? "-10em" : 0)});
  transition: 0.5s ease;
  z-index: 0;

  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 50vw 30em 50vw;
    border-color: transparent transparent rgb(238, 59, 36) transparent;

    h2 {
      margin: 4.3em 0;
      position: absolute;
      transform: translate(-50%, 0);
      letter-spacing: 0.5em;
      cursor: pointer;
      text-transform: uppercase;
      &:hover {
        text-decoration: underline;
      }
    }

    h2.underline-hover-effect {
      text-decoration: none;
      color: inherit;
    }

    .underline-hover-effect {
      display: inline-block;
      padding-bottom: 0.25rem; /* defines the space between text and underline */
    }

    .underline-hover-effect::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: rgb(235, 223, 197);
      transition: width 0.25s ease-out;
    }
    .underline-hover-effect:hover::before {
      width: 100%;
    }
  }

  .text-wrapper {
    background-color: rgb(238, 59, 36);
    height: 700px;
    div {
      position: relative;
      top: -20%;
      p {
        width: 50%;
        position: relative;
        margin: 0;
        top: -20%;
        left: 50vw;
        transform: translate(-50%, 0);

        text-align: center;
      }
    }
  }
`;

export const About = (props) => {
  const containerRef = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandle = () => {
    setIsClicked((prev) => (prev = !prev));
  };

  useEffect(() => {
    props.aboutPosition(
      containerRef.current.offsetTop,
      containerRef.current.offsetWidth
    );
  }, []);

  return (
    <ContainerAbout
      ref={containerRef}
      isClicked={props.isClicked}
      secondClick={isClicked}
      style={!isClicked || { transform: "translatey(-35em)" }}
    >
      <div className="triangle">
        <h2 className="underline-hover-effect" onClick={onClickHandle}>
          {"Let's meet"}
        </h2>
      </div>
      <div className="text-wrapper">
        <Anime
          delay={isClicked ? anime.stagger(100, { start: 200 }) : null}
          scale={[0.1, 1]}
        >
          <p>
            ' Magna nisi duis minim in. Ipsum reprehenderit dolore eu Lorem anim
            aliquip in cupidatat. Elit ex elit laboris ea est do tempor fugiat
            id. Eu ad nulla occaecat labore excepteur do eiusmod veniam. Qui
            irure labore commodo dolore cillum velit deserunt ex amet mollit
            exercitation. Dolore ullamco mollit consequat ad labore adipisicing
            veniam ipsum Lorem incididunt minim consectetur. Quis id fugiat ut
            laborum.'
          </p>
        </Anime>
      </div>
    </ContainerAbout>
  );
};
