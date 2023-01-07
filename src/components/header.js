import React from "react";
import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  height: 2em;
  width: 100%;
  top: ${(prop) => (prop.isClicked ? 0 : "-2em")};
  left: 0;
  display: flex;
  justify-content: flex-end;
  transition: 0.5s ease-out;

  .wrapper {
    display: flex;
    justify-content: space-evenly;
    width: 40%;

    button {
      cursor: pointer;
      background-color: inherit;
      border: none;
      font-family: inherit;
      letter-spacing: 0.5em;
    }
  }
`;

const Header = (props) => {
  return (
    <Container isClicked={props.isClicked}>
      <div className="wrapper">
        <button>about</button>
        <button>skills</button>
        <button>showOff</button>
        <button>contact</button>
      </div>
    </Container>
  );
};

export default Header;
