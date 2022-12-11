import moves from "./parse.js";
import Tail from "./Tail.js";

const head = [0, 0];
const tails = [];
for (let i = 0; i < 9; i++) {
  tails[i] = new Tail();
}

const moveMap = {
  R: () => { head[0] = head[0] + 1; },
  L: () => { head[0] = head[0] - 1; },
  U: () => { head[1] = head[1] + 1; },
  D: () => { head[1] = head[1] - 1; }
};

moves.forEach(move => {
  for (let i = 0; i < move.dist; i++) {
    moveMap[move.dir]();
    tails[0].dragTo(head);
    for (let j = 1; j < 9; j++) {
      tails[j].dragTo(tails[j-1].getPos());
    }
  }
});

console.log(tails[8].getVisitedCount());