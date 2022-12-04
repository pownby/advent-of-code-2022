const TYPE = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2
};

const SCORE = {
  [TYPE.ROCK]: 1,
  [TYPE.PAPER]: 2,
  [TYPE.SCISSORS]: 3
};

class Move {
  static TYPE = TYPE;
  static SCORE = SCORE;

  constructor(type) {
    this.type = type;
  }

  beats = (move) => {
    const opp = move.type;
    const me = this.type;

    return me === ((opp + 1) % 3);
  }

  draws = (move) => this.type === move.type;

  getScore = () => SCORE[this.type];

  toString = () => this.type;
}

module.exports = Move;