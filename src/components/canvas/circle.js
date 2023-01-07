export const circleConf = {
  radiusMin: 5,
  radiusMax: 10,
  speed: 9,
  color: [
    [0, 53, 71],
    [0, 94, 84],
    [194, 187, 0],
    [225, 82, 61],
    [237, 139, 22],
  ],
  opacity: 0.5,
  deceleration: 0.1,
};

class Circle {
  constructor(position, circleConf) {
    this.position = position;
    this.radius =
      Math.floor(
        Math.random() * (circleConf.radiusMax - circleConf.radiusMin)
      ) + circleConf.radiusMin;
    this.dx =
      (Math.round(Math.random()) * 2 - 1) * Math.random() * circleConf.speed;
    this.dy =
      (Math.round(Math.random()) * 2 - 1) * Math.random() * circleConf.speed;
    this.rgb =
      circleConf.color[Math.floor(Math.random() * circleConf.color.length)];
    this.opacity = circleConf.opacity;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.fillStyle = `rgba(${this.rgb.map((e) => {
      return e;
    })}, ${this.opacity})`;
    ctx.fill();
  }

  update(canvas, ctx) {
    if (this.position.x > canvas.width || this.position.x < 0) {
      this.dx = -this.dx;
    }

    if (this.position.y > canvas.height || this.position.y < 0) {
      this.dy = -this.dy;
    }
    //this.opacity -= 0.0001;
    this.position.y += this.dy;
    this.position.x += this.dx;
    this.dy < 0
      ? (this.dy += circleConf.deceleration)
      : (this.dy -= circleConf.deceleration);
    this.dx < 0
      ? (this.dx += circleConf.deceleration)
      : (this.dx -= circleConf.deceleration);
    this.draw(ctx);

    // if (this.opacity === 0) {
    //   position.length = 0;
    //   circleArr.length = 0;
    // }
  }
}

export default Circle;
