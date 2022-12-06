import { stacks, moves } from "./parse.js";

moves.forEach(([n, source, target]) => {
  const crates = stacks[source - 1].splice(-1 * n);
  stacks[target - 1].splice(stacks[target - 1].length, 0, ...crates);
});

console.log(stacks.reduce((result, stack) => result + stack.pop(), ''));