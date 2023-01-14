import React, { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

const PicassoCanvas = (props) => {
  const canvasRef = useRef(null);

  function anim() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    props.circleArr.forEach((e) => {
      //e.aboutSite(props.scrollPosition, props.aboutPosition, props.aboutWidth);
      e.update(canvas, ctx);
    });
    requestAnimationFrame(anim);
  }

  useEffect(() => {
    requestAnimationFrame(anim);
  }, []);

  useEffect(() => {
    props.circleArr.forEach((e) => {
      e.aboutSite(props.scrollPosition, props.aboutPosition, props.aboutWidth);
    });
  }, [props.scrollPosition, props.aboutPosition]);
  return <canvas ref={canvasRef}></canvas>;
};

export default PicassoCanvas;
