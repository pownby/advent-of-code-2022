import rocks from "./parse.js";
import Point from "./Point.js";
import max from "../common/max.js";

const sands = [];

const FLOOR = max(rocks.map(r => r.getLowestDepth())) + 2;

function someRockIntersects(x, y) {
  return rocks.some(rock => rock.intersects(x, y));
}

function someSandIntersects(x, y) {
  return sands.some(sand => sand.intersects(x, y));
}

function somethingIntersects(x, y) {
  return someSandIntersects(x, y) || someRockIntersects(x, y);
}

let settling = true;
while (settling) {
  let x = 500;
  let y = 0;
  let settled = false;

  while (!settled) {
    const ny = y + 1;

    if (ny === FLOOR) {
      settled = true;
      sands.push(new Point(x, y));
    } else if (!somethingIntersects(x, ny)) {
      y = ny;
    } else if (!somethingIntersects(x - 1, ny)) {
      x = x - 1;
      y = ny;
    } else if (!somethingIntersects(x + 1, ny)) {
      x = x + 1;
      y = ny;
    } else {
      settled = true;
      sands.push(new Point(x, y));
      if (x === 500 & y === 0) {
        settling = false;
      }
    }
  }
}

console.log(sands.length);