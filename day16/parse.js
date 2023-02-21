import { win, nix } from "../common/lineEndings.js";
import Valve from "./Valve.js";

const input = Deno.readTextFileSync('input.txt').trim();

const valves = input.split(nix).map(line => new Valve([...line.matchAll(RegExp(/[A-Z][A-Z]|\d+/g))]));
export const valveMap = valves.reduce((map, valve) => {
  return {
    ...map,
    [valve.label]: valve
  };
}, {});
valves.forEach(valve => valve.buildGraph(valveMap));
valves.forEach(valve => valve.buildDistanceMap(valveMap));

export default valves;