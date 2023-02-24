import Rock, { TYPE } from "./Rock.js";
import getCoordString from "./getCoordString.js";

export default class Square extends Rock {
  constructor(baseHeight) {
    super(baseHeight, TYPE.SQUARE);
  }

  calcRight(x) {
    return x + 1;
  }

  calcTop(y) {
    return y + 1;
  }

  getCoordList() {
    return [
      getCoordString(this.x0, this.y0),
      getCoordString(this.x1, this.y0),
      getCoordString(this.x0, this.y1),
      getCoordString(this.x1, this.y1),
    ];
  }
}