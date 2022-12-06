import signal from './parse.js';

function hasDupes(marker) {
  for (let i = 0; i < 13; i++) {
    for (let j = i + 1; j < 14; j++) {
      if (marker.charAt(i) === marker.charAt(j)) {
        return true;
      }
    }
  }
  return false;
}

for (let i = 13; i < signal.length; i++) {
  const marker = signal.slice(i - 13, i + 1);
  if (!hasDupes(marker)) {
    console.log(i + 1);
    break;
  }
}