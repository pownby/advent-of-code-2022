import Rock, { TYPE } from "./Rock.js";
import getCoordString from "./getCoordString.js";

export default class Cross extends Rock {
  constructor(baseHeight) {
    super(baseHeight, TYPE.CROSS);
  }

  calcRight(x) {
    return x + 2;
  }

  calcTop(y) {
    return y + 2;
  }

  getCoordList() {
    const midX = this.x0 + 1;
    const midY = this.y0 + 1;

    return this.coordList || this.memoCoordList([
      getCoordString(midX, this.y1),
      getCoordString(this.x0, midY),
      getCoordString(midX, midY),
      getCoordString(this.x1, midY),
      getCoordString(midX, this.y0)
    ]);
  }
}