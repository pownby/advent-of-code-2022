import Rock, { TYPE } from "./Rock.js";
import getCoordString from "./getCoordString.js";

export default class Hline extends Rock {
  constructor(baseHeight) {
    super(baseHeight, TYPE.HLINE);
  }

  calcRight(x) {
    return x + 3;
  }

  calcTop(y) {
    return y;
  }

  getCoordList() {
    return [
      getCoordString(this.x0, this.y0),
      getCoordString(this.x0 + 1, this.y0),
      getCoordString(this.x0 + 2, this.y0),
      getCoordString(this.x1, this.y0),
    ];
  }
}