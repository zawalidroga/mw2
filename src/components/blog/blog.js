import React from "react";
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
  height: 75vh;
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

  .article-wrapper {
    height: calc(100% - 4.8em);
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    justify-items: start;
  }
`;

export const Blog = () => {
  return (
    <Container>
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
      <div className="article-wrapper">
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
    </Container>
  );
};
