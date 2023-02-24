import moves from "./parse.js";
import { TYPE } from "./Rock.js";
import Hline from "./Hline.js";
import Cross from "./Cross.js";
import Angle from "./Angle.js";
import Vline from "./Vline.js";
import Square from "./Square.js";
import { visualizeSolution } from "./visualize.js";

const ORDER = [
  TYPE.HLINE,
  TYPE.CROSS,
  TYPE.ANGLE,
  TYPE.VLINE,
  TYPE.SQUARE
];

const CLASS_MAP = {
  [TYPE.HLINE]: Hline,
  [TYPE.CROSS]: Cross,
  [TYPE.ANGLE]: Angle,
  [TYPE.VLINE]: Vline,
  [TYPE.SQUARE]: Square
};

let _nextIndex = 0;
let _highestRock = 0;
let _nextMoveIndex = 0;
const _rocks = [];

function getNextRock(baseHeight) {
  const next = ORDER[_nextIndex];
  _nextIndex = (_nextIndex + 1) % ORDER.length;
  return new CLASS_MAP[next](baseHeight);
}

function getNextMove() {
  const next = _nextMoveIndex >= moves.length ? '' : moves.charAt(_nextMoveIndex);
  _nextMoveIndex = (_nextMoveIndex + 1) % moves.length;
  return next;
}

for (let i = 0; i < 2022; i++) {
  const nextRock = getNextRock(_highestRock);
  do {
    nextRock.move(getNextMove(), _rocks)
  } while(nextRock.moveDown(_rocks))
  _rocks.push(nextRock);
  const newTop = nextRock.top();
  if (newTop > _highestRock) {
    _highestRock = newTop;
  }
}

visualizeSolution(_rocks, 20);
console.log(_highestRock);