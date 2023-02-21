export default class Valve {
  constructor([[label], [flow], ...connections]) {
    this.label = label;
    this.flow = Number(flow);
    this.connectionsRaw = connections.flat();
  }

  toString() {
    return `Valve ${this.label} - flow ${this.flow} - connects ${this.connectionsRaw}`;
  }

  buildGraph(valveMap) {
    this.connections = this.connectionsRaw.map(c => valveMap[c]);
    this.map = valveMap;
  }

  buildDistanceMap() {
    const { map } = this;

    const unvisitedValves = Object.values(map);
    const shortestDistanceMap = new Map(Object.entries(map));
    unvisitedValves.forEach(v => { shortestDistanceMap[v] = Number.MAX_SAFE_INTEGER; });
    shortestDistanceMap[this] = 0;

    while (unvisitedValves.length) {
      const next = unvisitedValves.reduce((prev, curr) => {
        return shortestDistanceMap[prev] < shortestDistanceMap[curr] ? prev : curr
      });
      unvisitedValves.splice(unvisitedValves.indexOf(next), 1);

      next.connections.forEach(neighbor => {
        if (unvisitedValves.includes(neighbor)) {
          const distance = shortestDistanceMap[next] + 1;
          if (distance < shortestDistanceMap[neighbor]) {
            shortestDistanceMap[neighbor] = distance;
          }
        }
      });
    }
    this.distanceMap = shortestDistanceMap;
  }

  getDistanceTo(valve) {
    return this.distanceMap?.[valve];
  }
}