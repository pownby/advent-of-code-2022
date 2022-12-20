export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  intersects(x, y) {
    return x === this.x && y === this.y;
  }
}