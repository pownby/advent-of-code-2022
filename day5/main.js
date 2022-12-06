import { stacks, moves } from "./parse.js";

function moveCrate(source, target) {
  const crate = source.pop();
  target.push(crate);
}

moves.forEach(([n, source, target]) => {
  for (let i = 0; i < n; i++) {
    moveCrate(stacks[source - 1], stacks[target - 1]);
  }
});

console.log(stacks.reduce((result, stack) => result + stack.pop(), ''));