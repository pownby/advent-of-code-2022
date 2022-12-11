function computeMoveDistance(d) {
  if (d > 1) {
    return -1;
  } else if (d < -1) {
    return 1;
  }
  return 0;
}

function computeMove([myX, myY], [toX, toY]) {
  const dX = toX - myX;
  const dY = toY - myY;
  if (Math.abs(dX) < 2 && Math.abs(dY) < 2) {
    return;
  }

  return [toX + computeMoveDistance(dX), toY + computeMoveDistance(dY)]
}

export default class Tail {
  constructor() {
    this.pos = [0, 0];
    this.visited = { '0:0': true };
  }

  moveTo = (pos) => {
    this.pos = pos;
    this.visited[`${pos[0]}:${pos[1]}`] = true;
  }

  getVisitedCount = () => {
    return Object.keys(this.visited).length;
  }

  getPos = () => this.pos;

  dragTo = (to) => {
    const move = computeMove(this.pos, to);
    if (move) {
      this.moveTo(move);
    }
  }
}