import instructions from "./parse.js";
import sum from "../common/sum.js";

let _cycle = 0;
let _X = 1;

const _significantCycles = {};

function isSignificant(cycle) {
  return cycle <= 220 && !((cycle - 20) % 40);
}

function doCycle() {
  _cycle += 1;
  if (isSignificant(_cycle)) {
    _significantCycles[_cycle] = _cycle * _X;
  }
}

function addx(val) {
  doCycle();
  doCycle();
  _X += val;
}

function execute(instruction) {
  if (instruction.startsWith('n')) {
    doCycle();
  } else {
    const [,val] = instruction.split(' ');
    addx(Number(val));
  }
}

instructions.forEach(instruction => execute(instruction));

console.log(sum(Object.values(_significantCycles)));