import rucksacks from "./parse.js";
import sum from "../common/sum.js";
import getPriority from './getPriority.js';

function split(arr) {
  return [
    arr.slice(0, arr.length / 2),
    arr.slice(arr.length / 2)
  ];
}

const priorities = rucksacks.map(sack => {
  const compartments = split(sack);
  return getPriority(RegExp(`[${compartments[0]}]`).exec(compartments[1])[0]);
});

console.log(sum(priorities));