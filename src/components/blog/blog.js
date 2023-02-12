import React, { useRef, useState } from "react";
import styled from "styled-components";
import Anime, { anime } from "react-anime";
import { BlogArticle } from "./blog-article";
const articleColor = [
  "#BD9154",
  "#EE3B24",
  "#1A1617",
  "#008043",
  "#0552A4",
  "#FAA41B",
];

const articles = [
  {
    title: "dupsko",
    text: "Sint mollit officia aliqua qui eiusmod aliquip ullamco ex ullamco in aute. Nisi qui minim fugiat deserunt ea excepteur. Tempor voluptate voluptate aliqua culpa in labore.",
    img: "http://vignette1.wikia.nocookie.net/meme/images/7/71/BusinessCat2.jpg",
  },
  {
    title: "kjrejzi",
    text: "Sint mollit officia aliqua qui eiusmod aliquip ullamco ex ullamco in aute. Nisi qui minim fugiat deserunt ea excepteur. Tempor voluptate voluptate aliqua culpa in labore.",
    img: "https://i.imgflip.com/796h1r.jpg",
  },
  {
    title: "kantry",
    text: "Sint mollit officia aliqua qui eiusmod aliquip ullamco ex ullamco in aute. Nisi qui minim fugiat deserunt ea excepteur. Tempor voluptate voluptate aliqua culpa in labore.",
    img: "https://i.imgflip.com/796d7b.jpg",
  },
  {
    title: "karokan",
    text: "Sint mollit officia aliqua qui eiusmod aliquip ullamco ex ullamco in aute. Nisi qui minim fugiat deserunt ea excepteur. Tempor voluptate voluptate aliqua culpa in labore.",
    img: "https://imgflip.com/s/meme/Bad-Luck-Brian.jpg",
  },
  {
    title: "mooo",
    text: "Sint mollit officia aliqua qui eiusmod aliquip ullamco ex ullamco in aute. Nisi qui minim fugiat deserunt ea excepteur. Tempor voluptate voluptate aliqua culpa in labore.",
    img: "https://i.imgflip.com/5rswbp.jpg",
  },
  {
    title: "foo",
    text: "Sint mollit officia aliqua qui eiusmod aliquip ullamco ex ullamco in aute. Nisi qui minim fugiat deserunt ea excepteur. Tempor voluptate voluptate aliqua culpa in labore.",
    img: "https://imgflip.com/s/meme/Grumpy-Cat.jpg",
  },
];

const Container = styled.div`
  width: 100vw;
  background-color: rgb(0, 128, 67);

  z-index: 1;
  .title-container {
    width: 100vw;
    height: 4.8em;
    background-color: #1a1617;
    color: #ebdfc5;
    letter-spacing: 1em;
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    span {
      span {
        color: #bd9154;
      }
    }
    ::after {
      transform: (translatex(100px));
    }
  }

  .article-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    .wrapper {
      display: flex;
      justify-content: space-evenly;
      width: fit-content;
      transition: 0.5s ease-out;
    }
  }
`;

const mouse = {
  x: 0,
  y: 0,
  clickX: 0,
  acceleration: 0,
  speed: 0,
  prevX: 0,
};

export const Blog = () => {
  const wrapperTopRef = useRef();
  const wrapperTop = wrapperTopRef.current;
  const wrapperBottomRef = useRef();
  const wrapperBottom = wrapperBottomRef.current;
  // const [isClickedTop, setIsClickedTop] = useState(false);
  // const [isClickedBottom, setIsClickedBottom] = useState(false);
  let isClickedTop = false;
  let isClickedBottom = false;

  let translateTop = 0;
  let translateBottom = 0;

  const mousePosition = (event) => {
    mouse.x = event.pageX;
    mouse.y = event.pageY;

    if (isClickedTop) {
      wrapperTop.style.transform = `translate(${
        translateTop + mouse.x - mouse.clickX
      }px)`;
    }
    if (isClickedBottom) {
      wrapperBottom.style.transform = `translate(${
        translateBottom + mouse.x - mouse.clickX
      }px)`;
    }
  };

  const mouseDownHandler = (e, isTop) => {
    e.preventDefault();
    mouse.clickX = e.pageX;
    isTop ? (isClickedTop = true) : (isClickedBottom = true);
  };

  const mouseUpHandler = (isTop) => {
    if (isTop) {
      isClickedTop = false;
      translateTop = translateTop + mouse.x - mouse.clickX;
    } else {
      isClickedBottom = false;
      translateBottom = translateBottom + mouse.x - mouse.clickX;
    }
  };

  return (
    <Container onMouseMove={mousePosition}>
      <div className="title-container">
        <h2>
          <span>
            This is another IT blog...<span>***</span>
          </span>
          <span>
            This is another IT blog...<span>***</span>
          </span>
          <span>
            This is another IT blog...<span>***</span>
          </span>
          <span>
            This is another IT blog...<span>***</span>
          </span>
        </h2>
      </div>
      <div className="article-container">
        <div
          className="wrapper wrapper-top"
          ref={wrapperTopRef}
          onMouseDown={(e) => {
            mouseDownHandler(e, true);
          }}
          onMouseUp={() => mouseUpHandler(true)}
        >
          {articles.map((e, i) => {
            return (
              <BlogArticle
                articTitle={e.title}
                color={articleColor[i < 6 ? i : i - 6]}
                imgArt={e.img}
              />
            );
          })}
        </div>
        <div
          className="wrapper wrapper-bottom"
          ref={wrapperBottomRef}
          onMouseDown={(e) => {
            mouseDownHandler(e, false);
          }}
          onMouseUp={() => mouseUpHandler(false)}
        >
          {articles.map((e, i) => {
            return (
              <BlogArticle
                articTitle={e.title}
                color={articleColor[i < 6 ? i : i - 6]}
                imgArt={e.img}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
