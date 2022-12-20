import Line from "./Line.js";
import max from "../common/max.js";

export default class Rock {
  constructor(points) {
    this.lines = [];

    for (let i = 1; i < points.length; i++){
      this.lines.push(new Line(points[i - 1], points[i]));
    }
  }

  intersects(x, y) {
    return this.lines.some(line => line.intersects(x, y));
  }

  getLowestDepth() {
    return max(this.lines.map(line => line.getLowestDepth()));
  }
}