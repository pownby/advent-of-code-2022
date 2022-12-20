export default class Line {
  constructor(a, b) {
    const [ax, ay] = a.split(',').map(n => Number(n));
    const [bx, by] = b.split(',').map(n => Number(n));

    this.isVertical = ax === bx;

    this.ax = ax;
    this.ay = ay;
    this.bx = bx;
    this.by = by;

    this.length = Math.abs(this.isVertical ? ay - by : ax - bx) + 1;
    this.start = this.isVertical ? Math.min(ay, by) : Math.min(ax, bx);
    this.end = this.isVertical ? Math.max(ay, by) : Math.max(ax, bx);
  }

  intersects(x, y) {
    const { ax, ay, start, end } = this;

    if (this.isVertical) {
      return x === ax && y >= start && y <= end;
    }
    return y === ay && x >= start && x <= end;
  }

  getLowestDepth() {
    return this.isVertical ? this.end : this.ay;
  }
}