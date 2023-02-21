import valves, { valveMap } from "./parse.js";

const AA = valveMap['AA'];

function getMaximumFlowRate(source, closedValves, timeLeft, transitA, transitB) {
  if (!closedValves.length) {
    return 0;
  }

  if (!transitA) {
    if (!transitB) {
      // Neither in transit
      const candidateValves = closedValves.filter(v => source.getDistanceTo(v) + 1 < timeLeft);
      if (!candidateValves.length) {
        return 0;
      } else if (candidateValves.length === 1) {
        // only 1 valve left to choose
        const target = candidateValves[0];
        const cost = source.getDistanceTo(target) + 1; // travel distance + 1 to open valve
        return (timeLeft - cost) * target.flow;
      } else {
        // iterate through our choices
        let subMax = 0;
        for (let i = 0; i < candidateValves.length - 1; i++) {
          for (let j = 1; j < candidateValves.length; j++) {
            const targetA = candidateValves[i];
            const targetB = candidateValves[j];
            const remainingValves = candidateValves.filter(v => v !== targetA && v !== targetB);
            const distA = source.getDistanceTo(targetA);
            const distB = source.getDistanceTo(targetB);
            if (distA < distB) {
              const cost = distA + 1;
              const gains = (timeLeft - cost) * targetA.flow;
              subMax = Math.max(subMax, gains + getMaximumFlowRate(targetA, remainingValves, timeLeft - cost, 0, distB + 1 - cost));
            } else if (distB < distA) {
              const cost = distB + 1;
              const gains = (timeLeft - cost) * targetB.flow;
              subMax = Math.max(subMax, gains + getMaximumFlowRate(targetA, remainingValves, timeLeft - cost, distA + 1 - cost, 0));
            } else {
              const cost = distA + 1;
              const gains = (timeLeft - cost) * (targetA.flow + targetB.flow);
              subMax = Math.max(subMax, gains + getMaximumFlowRate(targetA, remainingValves, timeLeft - cost, 0, 0), gains + getMaximumFlowRate(targetB, remainingValves, timeLeft - cost, 0, 0));
            }
            
          }
        }
        return subMax;
      }
    } else {
      // A is stationary, B is in transit
      return closedValves.reduce((max, target) => {
        const cost = source.getDistanceTo(target) + 1; // travel distance + 1 to open valve
        if (cost >= timeLeft) {
          return max;
        }
        const gains = (timeLeft - cost) * target.flow;
        const progressTime = Math.min(cost, transitB);
        return Math.max(max, gains + getMaximumFlowRate(target, closedValves.filter(v => v !== target), timeLeft - progressTime, cost - progressTime, transitB - progressTime));
      }, 0);
    }
  } else {
    if (!transitB) {
      // A is in transit, B is stationary
      return closedValves.reduce((max, target) => {
        const cost = source.getDistanceTo(target) + 1; // travel distance + 1 to open valve
        if (cost >= timeLeft) {
          return max;
        }
        const gains = (timeLeft - cost) * target.flow;
        const progressTime = Math.min(cost, transitA);
        return Math.max(max, gains + getMaximumFlowRate(target, closedValves.filter(v => v !== target), timeLeft - progressTime, transitA - progressTime, cost - progressTime));
      }, 0);
    } else {
      // Both in transit
      const progressTime = Math.min(transitA, transitB);
      return getMaximumFlowRate(source, closedValves, timeLeft - progressTime, transitA - progressTime, transitB - progressTime);
    }
  }

}

// disregard valves with flow 0 since they won't help us
console.log(getMaximumFlowRate(AA, Object.values(valveMap).filter(v => v.flow), 26, 0, 0));