class Circle {
  constructor(position) {
    this.position = position;
    this.radius = Math.floor(Math.random() * 5) + 5;
    this.dx = (Math.round(Math.random()) * 2 - 1) * Math.random();
    this.dy = (Math.round(Math.random()) * 2 - 1) * Math.random();
    this.rgb = [2, 100, 100];
    this.opacity = 0.5;
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
    this.draw(ctx);
    // if (this.opacity === 0) {
    //   position.length = 0;
    //   circleArr.length = 0;
    // }
  }
}

export default Circle;
