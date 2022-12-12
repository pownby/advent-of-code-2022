import instructions from "./parse.js";

let _cycle = 0;
let _X = 1;
const pixels = [];

function shouldDrawPixel() {
  const adjustedCycle = _cycle % 40;
  return (adjustedCycle > _X - 2) && (adjustedCycle < _X + 2);
}

function doCycle() {
  if (shouldDrawPixel()) {
    pixels.push(true);
  } else {
    pixels.push(false);
  }
  _cycle += 1;
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

const output = (p) => p ? '#' : '.';

const lines = [
  pixels.slice(0, 40).map(output),
  pixels.slice(40, 80).map(output),
  pixels.slice(80, 120).map(output),
  pixels.slice(120, 160).map(output),
  pixels.slice(160, 200).map(output),
  pixels.slice(200).map(output)
];

lines.forEach(line => console.log(line.join('')));