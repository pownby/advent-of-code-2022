import valves, { valveMap } from "./parse.js";

const AA = valveMap['AA'];

function getMaximumFlowRate(locA, locB, closedValves, timeLeft, transitA, transitB) {
  if (!closedValves.length) {
    return 0;
  }

  if (!transitA) {
    if (!transitB) {
      // Neither in transit
      // iterate through our choices
      return Math.max(
        closedValves.reduce((max, target) => {
          const cost = locA.getDistanceTo(target) + 1; // travel distance + 1 to open valve
          if (cost >= timeLeft) {
            return max;
          }
          const gains = (timeLeft - cost) * target.flow;
          return Math.max(max, gains + getMaximumFlowRate(target, locB, closedValves.filter(v => v !== target), timeLeft, cost, transitB));
        }, 0),
        locA === locB ? 0 : closedValves.reduce((max, target) => {
          const cost = locB.getDistanceTo(target) + 1; // travel distance + 1 to open valve
          if (cost >= timeLeft) {
            return max;
          }
          const gains = (timeLeft - cost) * target.flow;
          return Math.max(max, gains + getMaximumFlowRate(locA, target, closedValves.filter(v => v !== target), timeLeft, transitA, cost));
        }, 0)
      );
    } else {
      // A is stationary, B is in transit
      return closedValves.reduce((max, target) => {
        const cost = locA.getDistanceTo(target) + 1; // travel distance + 1 to open valve
        if (cost >= timeLeft) {
          return max;
        }
        const gains = (timeLeft - cost) * target.flow;
        const progressTime = Math.min(cost, transitB);
        if (timeLeft - progressTime < 3) {
          return Math.max(max, gains);
        }
        return Math.max(max, gains + getMaximumFlowRate(target, locB, closedValves.filter(v => v !== target), timeLeft - progressTime, cost - progressTime, transitB - progressTime));
      }, 0);
    }
  } else {
    if (!transitB) {
      // A is in transit, B is stationary
      return closedValves.reduce((max, target) => {
        const cost = locB.getDistanceTo(target) + 1; // travel distance + 1 to open valve
        if (cost >= timeLeft) {
          return max;
        }
        const gains = (timeLeft - cost) * target.flow;
        const progressTime = Math.min(cost, transitA);
        if (timeLeft - progressTime < 3) {
          return Math.max(max, gains);
        }
        return Math.max(max, gains + getMaximumFlowRate(locA, target, closedValves.filter(v => v !== target), timeLeft - progressTime, transitA - progressTime, cost - progressTime));
      }, 0);
    } else {
      // Both in transit
      const progressTime = Math.min(transitA, transitB);
      if (timeLeft - progressTime < 3) {
        return 0;
      }
      return getMaximumFlowRate(locA, locB, closedValves, timeLeft - progressTime, transitA - progressTime, transitB - progressTime);
    }
  }

}

// disregard valves with flow 0 since they won't help us
console.log(getMaximumFlowRate(AA, AA, Object.values(valveMap).filter(v => v.flow), 26, 0, 0));