import valves, { valveMap } from "./parse.js";

const AA = valveMap['AA'];

function getMaximumFlowRate(source, closedValves, timeLeft) {
  if (!closedValves.length) {
    return 0;
  }

  return closedValves.reduce((max, target) => {
    const cost = source.getDistanceTo(target) + 1; // travel distance + 1 to open valve
    if (cost >= timeLeft) {
      return max;
    }
    const gains = (timeLeft - cost) * target.flow;
    return Math.max(max, gains + getMaximumFlowRate(target, closedValves.filter(v => v !== target), timeLeft - cost));
  }, 0);
}

// disregard valves with flow 0 since they won't help us
console.log(getMaximumFlowRate(AA, Object.values(valveMap).filter(v => v.flow), 30));