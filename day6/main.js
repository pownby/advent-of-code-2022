import signal from './parse.js';

function hasDupes(marker) {
  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (marker.charAt(i) === marker.charAt(j)) {
        return true;
      }
    }
  }
  return false;
}

for (let i = 3; i < signal.length; i++) {
  const marker = signal.slice(i - 3, i + 1);
  if (!hasDupes(marker)) {
    console.log(i + 1);
    break;
  }
}