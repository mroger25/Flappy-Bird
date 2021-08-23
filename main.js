import { CanvasActuator } from "./CanvasActuator.js";
import { Bird } from "./Bird.js";
import { Pipe } from "./Pipe.js";

class Sketch {
  constructor() {
    this.court = { w: 389, h: 511 };
    this.myCanvas = new CanvasActuator(this.court);
    this.myCanvas.on("draw", this.draw.bind(this));
    this.bird = new Bird(this.court);
    this.myCanvas.on("keypress", this.bird.move.bind(this.bird));
    this.pipes = new Pipe(this.court);
  }

  draw() {
    const ctx = this.myCanvas.ctx;
    this.pipes.show(ctx);
    this.bird.show(ctx);
  }
}

new Sketch();
