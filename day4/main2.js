import pairs from './parse.js';

const targetPairs = pairs.filter(pair => {
  const [s1, s2] = pair;

  const [s1a, s1b] = s1;
  const [s2a, s2b] = s2;

  if (s1a < s2b) {
    return s1b >= s2a;
  } else if (s2a < s1b) {
    return s2b >= s1a;
  }
  return true;
});

console.log(targetPairs.length);