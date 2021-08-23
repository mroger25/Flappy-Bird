const drawBird = (ctx, { x, y }, r) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = "#FF0";
  ctx.fill();
  ctx.closePath();
};

const sum = (a, b) => {
  return { x: a.x + b.x, y: a.y + b.y };
};

export class Bird {
  constructor({ w, h }) {
    this.court = { w, h };
    this.r = 16;
    this.init();
  }

  init() {
    this.pos = { x: this.court.w / 5, y: this.court.w / 2 };
    this.vel = { x: 0, y: -9, max: 10, min: -8 };
    this.acc = { x: 0, y: 0.6 };
  }

  move(e) {
    const keyAccepted = {
      Space: () => {
        this.vel.y = -8;
      },
    };
    if (keyAccepted[e]) keyAccepted[e]();
  }

  update() {
    this.vel = sum(this.acc, this.vel);
    this.pos = sum(this.vel, this.pos);
    if (0 > this.pos.y || this.pos.y > this.court.h) {
      alert("GAME OVER");
      this.init();
    }
  }

  show(ctx) {
    this.update();
    drawBird(ctx, this.pos, this.r);
  }
}
