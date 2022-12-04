const Match = require('./Match');
const Move = require('./Move');

const { ROCK, PAPER, SCISSORS } = Move.TYPE;

const MOVE_MAP = {
  A: ROCK,
  B: PAPER,
  C: SCISSORS
};

class Match2 extends Match {
  constructor(match) {
    super();
    
    const [oppSymbol, mySymbol] = match;
    const oppType = MOVE_MAP[oppSymbol];

    let myType;
    if (mySymbol === 'X') {
      myType = (oppType + 2) % 3;
    } else if (mySymbol === 'Y') {
      myType = oppType;
    } else {
      myType = (oppType + 1) % 3;
    }

    this.moves = [new Move(oppType), new Move(myType)];
  }
}

module.exports = Match2;