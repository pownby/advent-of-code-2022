import sensors from "./parse.js";
import Range from "./Range.js";

const Y = 2000000;

const range = new Range();

sensors.forEach(sensor => {
  const sensorRange = sensor.getXRangeAt(Y);
  if (sensorRange) {
    range.add(sensorRange);
  }
})

console.log(range.getLength());