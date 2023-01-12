import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ContainerAbout = styled.div`
  background-color: rgb(73, 73, 73);
  width: 700px;
  height: 700px;
  h2 {
    color: red;
    text-transform: uppercase;
  }
`;

export const About = (props) => {
  const containerRef = useRef();

  useEffect(() => {
    props.aboutPosition(containerRef.current.offsetTop);
  }, []);

  return (
    <ContainerAbout ref={containerRef}>
      <h2>About me</h2>
      <p>
        ' Magna nisi duis minim in. Ipsum reprehenderit dolore eu Lorem anim
        aliquip in cupidatat. Elit ex elit laboris ea est do tempor fugiat id.
        Eu ad nulla occaecat labore excepteur do eiusmod veniam. Qui irure
        labore commodo dolore cillum velit deserunt ex amet mollit exercitation.
        Dolore ullamco mollit consequat ad labore adipisicing veniam ipsum Lorem
        incididunt minim consectetur. Quis id fugiat ut laborum.'
      </p>
    </ContainerAbout>
  );
};
