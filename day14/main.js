import rocks from "./parse.js";
import Point from "./Point.js";
import max from "../common/max.js";

const sands = [];

const LOWEST_DEPTH = max(rocks.map(r => r.getLowestDepth()));

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
    if (ny > LOWEST_DEPTH) {
      settling = false;
      break;
    }

    if (!somethingIntersects(x, ny)) {
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
    }
  }
}

console.log(sands.length);