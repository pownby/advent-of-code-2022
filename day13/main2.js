import pairs from "./parse.js";
import { compareLists } from "./compare.js";

const DIVIDER_PACKETS = [
  [[2]],
  [[6]]
];

DIVIDER_PACKETS.forEach(p => { p.isDivider = true; });

const packets = pairs.flat().concat(DIVIDER_PACKETS);

packets.sort((a, b) => compareLists(a, b) ? -1 : 1);

console.log(packets.reduce((prev, curr, index) => {
  if (curr.isDivider) {
    return prev * (index + 1);
  }
  return prev;
}, 1));