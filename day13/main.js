import pairs from "./parse.js";
import { compareLists } from "./compare.js";

console.log(pairs.reduce((total, pair, index) => {
  const [left, right] = pair;

  if (compareLists(left, right)) {
    return total + index + 1;
  }
  return total;
}, 0));