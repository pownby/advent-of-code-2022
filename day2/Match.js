class Match {
  getScore = () => {
    const [opp, me] = this.moves;

    let winScore = 0;
    if (me.draws(opp)) {
      winScore = 3;
    } else if (me.beats(opp)) {
      winScore = 6;
    }

    return winScore + me.getScore();
  }

}

module.exports = Match;