import moves from "./parse.js";
import Tail from "./Tail.js";

const head = [0, 0];
const tail = new Tail();

const moveMap = {
  R: () => { head[0] = head[0] + 1; },
  L: () => { head[0] = head[0] - 1; },
  U: () => { head[1] = head[1] + 1; },
  D: () => { head[1] = head[1] - 1; }
};

moves.forEach(move => {
  for (let i = 0; i < move.dist; i++) {
    moveMap[move.dir]();
    tail.dragTo(head);
  }
});

console.log(tail.getVisitedCount());