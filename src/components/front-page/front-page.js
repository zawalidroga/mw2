import React, { useState, useRef, useEffect } from "react";
import { Container } from "./front-page-style";

const FrontPage = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const containerRef = useRef(0);

  const hoverHandler = (e) => {
    setIsHover(e);
  };

  const clickHandler = (e) => {
    hoverHandler(e);
    props.clickHandler();
  };

  useEffect(() => {
    window.scrollY > containerRef.current.offsetTop
      ? setIsScrolled(true)
      : setIsScrolled(false);
    console.log(isScrolled);
  }, [props.scrollPosition]);

  return (
    <Container
      ref={containerRef}
      onClick={() => clickHandler(false)}
      isClicked={props.isClicked}
      isMouseOn={isHover}
      scrolledPos={isScrolled}
    >
      <div className="mw-container">MW</div>
      <div className="meet-container">LET'S MEET</div>
      <div className="welcome-container">
        <div
          className="main-text button-menu"
          onMouseOver={() => hoverHandler(true)}
          onMouseLeave={() => hoverHandler(false)}
        >
          WELCOME
        </div>
        <div className="text first">WELCOME</div>
        <div className="text second">WELCOME</div>
        <div className="text third">WELCOME</div>
      </div>
    </Container>
  );
};

export default FrontPage;
