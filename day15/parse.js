import { win, nix } from "../common/lineEndings.js";
import Sensor from "./Sensor.js";

const input = Deno.readTextFileSync('input.txt').trim();

const sensors = input.split(nix).map(line => new Sensor([...line.matchAll(RegExp(/-?\d+/g))].map(n => Number(n))));

export default sensors;