const drawPipe = (ctx, { x, y, w, h }) => {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fillStyle = "#0F0";
  ctx.fill();
  ctx.closePath();
};

export class Pipe {
  constructor({ w, h }) {
    this.court = { w, h };
    this.init();
  }

  init() {
    this.grid = [];
    this.dim = { w: 50, h: 0 };
    this.vel = { x: -4, y: 0 };
    this.setframe();
    this.addPipes();
  }

  setframe() {
    this.frame = 50;
  }

  addPipes() {
    const hmin = 50;
    const gap = 200;
    const up = {
      x: this.court.w,
      y: 0,
      w: this.dim.w,
      h: hmin + Math.floor(Math.random() * (this.court.h - hmin - hmin - gap)),
    };
    const dw = {
      x: this.court.w,
      y: up.h + gap,
      w: this.dim.w,
      h: this.court.h - up.h - gap,
    };
    this.grid.push(up);
    this.grid.push(dw);
  }

  update() {
    this.grid.forEach((p) => {
      p.x += this.vel.x;
    });
    if (this.grid[0].x + this.dim.w < 0) {
      this.grid.shift();
      this.grid.shift();
    }
    this.frame--;
    if (this.frame < 0) {
      this.addPipes();
      this.setframe();
    }
  }

  show(ctx) {
    this.update();
    this.grid.forEach((p) => {
      drawPipe(ctx, p);
    });
  }
}
