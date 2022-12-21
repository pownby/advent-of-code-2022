import sensors from "./parse.js";
import Range from "./Range.js";

const MAX = 4000000;

for (let j = 0; j < MAX + 1; j++) {
  const range = new Range();
  let rangeExceedsMax = false;
  for (let i = 0; !rangeExceedsMax && i < sensors.length; i++) {
    const sensorRange = sensors[i].getXRangeAt(j);
    if (sensorRange) {
      range.add(sensorRange);
      if (range.exceeds(MAX)) {
        rangeExceedsMax = true;
      }
    }
  }

  if (!rangeExceedsMax) {
    const x = range.getGap();
    console.log(`X:${x}, Y:${j}`);
    console.log((MAX * x) + j);
    break;
  }
}