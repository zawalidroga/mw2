import styled from "styled-components";

export const Container = styled.div`
  position: ${(props) => (props.scrolledPos ? "fixed" : "relative")};
  top: -15px;
  font-family: "Teko", sans-serif;
  color: rgb(238, 59, 36);
  height: 3em;
  width: 7em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  letter-spacing: 0.3em;
  cursor: pointer;
  overflow: hidden;
  transition: ease 1s;

  div {
    position: absolute;
    transition: 1s ease-out;
  }
  .mw-container {
    transform: translatex(
      ${(props) => (props.scrolledPos > 0 ? "inherit" : "300px")}
    );
  }

  .meet-container {
    transform: translatex(
      ${(props) =>
        !props.isClicked || props.scrolledPos > 0 ? "-500px" : "inherit"}
    );
  }

  .welcome-container {
    transform: translatex(
      ${(props) =>
        props.isClicked || props.scrolledPos > 0 ? "300px" : "inherit"}
    );
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;

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
  }
`;
