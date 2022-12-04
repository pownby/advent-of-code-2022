const Match = require('./Match');
const Move = require('./Move');

const { ROCK, PAPER, SCISSORS } = Move.TYPE;

const MOVE_MAP = {
  X: ROCK,
  Y: PAPER,
  Z: SCISSORS,
  A: ROCK,
  B: PAPER,
  C: SCISSORS
};

class Match1 extends Match {
  constructor(match) {
    super();
    
    const [opp, me] = match;

    this.moves = [new Move(MOVE_MAP[opp]), new Move(MOVE_MAP[me])];
  }
}

module.exports = Match1;