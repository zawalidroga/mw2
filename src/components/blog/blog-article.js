import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* height: calc((100vh - 4.8em) / 2);
  width: calc((100vw - 10%) / 4); */
  padding: 1em;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  align-items: start;

  h2 {
    grid-column-start: span 2;
    color: #faa41b;
    text-shadow: 0.02em 0.02em 0 #ee3b24, 0.04em 0.04em 0 #ee3b24,
      0.08em 0.08em #ee3b24, 0.012em 0.12em 0 #ee3b24;
    margin: 0;
    align-content: center;
  }
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }
  img {
    width: 200px;
    height: 200px;
    align-self: center;
    object-fit: cover;
  }

  button {
    grid-row: 3;
    grid-column: 1 / span 2;
    justify-self: center;
    width: 200px;
  }
`;

export const BlogArticle = (props) => {
  return (
    <Container style={{ backgroundColor: props.color }}>
      <h2>{props.articTitle}</h2>
      <p>
        Qui velit magna elit sint ut ipsum exercitation enim velit reprehenderit
        esse eu quis aute. Cupidatat aute duis proident proident minim elit
        laborum eiusmod mollit laborum nisi duis. Non nisi aliquip adipisicing
        quis sit ullamco. Ex sit reprehenderit laboris voluptate ea aliquip
        labore reprehenderit nulla. Occaecat laboris est dolore minim id sit non
        esse voluptate est laborum et ullamco. Pariatur pariatur pariatur amet
        do anim do anim in laborum sit proident.
      </p>
      <img src={props.imgArt}></img>
      <button>Read article</button>
    </Container>
  );
};
