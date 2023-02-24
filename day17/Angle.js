import Rock, { TYPE } from "./Rock.js";
import getCoordString from "./getCoordString.js";

export default class Angle extends Rock {
  constructor(baseHeight) {
    super(baseHeight, TYPE.ANGLE);
  }

  calcRight(x) {
    return x + 2;
  }

  calcTop(y) {
    return y + 2;
  }

  getCoordList() {
    return [
      getCoordString(this.x0, this.y0),
      getCoordString(this.x0 + 1, this.y0),
      getCoordString(this.x1, this.y0),
      getCoordString(this.x1, this.y0 + 1),
      getCoordString(this.x1, this.y1),
    ];
  }
}