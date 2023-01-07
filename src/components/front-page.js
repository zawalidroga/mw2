import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Teko", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  letter-spacing: 0.3em;
  cursor: pointer;

  .text {
    position: absolute;
    opacity: ${(props) => (props.isMouseOn ? 0.4 : 0)};
    z-index: -1;
    transition: all 0.6s cubic-bezier(0.81, 0.01, 0.09, 1) 0.08s;
  }
  .first {
    color: ${(props) => (props.isMouseOn ? "cyan" : "black")};
    transform: ${(props) =>
      !props.isMouseOn || "rotatey(-5deg) rotatex(15deg) scale(1.25)"};
  }
  .second {
    color: ${(props) => (props.isMouseOn ? "magenta" : "black")};
    transform: ${(props) =>
      !props.isMouseOn || "rotatex(-15deg) rotatey(5deg) scale(1.25)"};
  }
  .third {
    color: ${(props) => (props.isMouseOn ? "yellow" : "black")};
    transform: ${(props) =>
      !props.isMouseOn || "rotatey(-2deg) rotatex(7deg) scale(1.25)"};
  }
`;

const FrontPage = (props) => {
  const [isHover, setIsHover] = useState(false);

  const foo = (e) => {
    setIsHover(e);
  };

  const clickHandler = (e) => {
    foo(e);
    props.clickHandler();
  };

  return (
    <Container
      onMouseOver={() => foo(true)}
      onMouseLeave={() => foo(false)}
      onClick={() => clickHandler(false)}
      isMouseOn={isHover}
    >
      <div className="main-text">WELCOME</div>
      <div className="text first">WELCOME</div>
      <div className="text second">WELCOME</div>
      <div className="text third">WELCOME</div>
    </Container>
  );
};

export default FrontPage;
