import pairs from './parse.js';

const targetPairs = pairs.filter(pair => {
  const [s1, s2] = pair;
  const d0 = s1[0] - s2[0];
  const d1 = s1[1] - s2[1];

  if (!d0 || !d1) { return true; }

  if (d0 < 0) { return d1 > 0; }

  return d1 < 0;
});

console.log(targetPairs.length);