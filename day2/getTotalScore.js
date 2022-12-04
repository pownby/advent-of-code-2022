const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

module.exports = function getTotalScore(Match) {
  const matches = input.trim().split(/\n/).map(match => new Match(match.split(' ')));
  return matches.reduce((sum, match) => sum + match.getScore(), 0);
}