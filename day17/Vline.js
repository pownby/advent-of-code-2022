import Rock, { TYPE } from "./Rock.js";
import getCoordString from "./getCoordString.js";

export default class Vline extends Rock {
  constructor(baseHeight) {
    super(baseHeight, TYPE.VLINE);
  }

  calcRight(x) {
    return x;
  }

  calcTop(y) {
    return y + 3;
  }

  getCoordList() {
    return this.coordList || this.memoCoordList([
      getCoordString(this.x0, this.y0),
      getCoordString(this.x0, this.y0 + 1),
      getCoordString(this.x0, this.y0 + 2),
      getCoordString(this.x0, this.y1),
    ]);
  }
}