import { win, nix } from "../common/lineEndings.js";

const input = Deno.readTextFileSync('input.txt').trim();

const pairs = input.split(nix + nix).map(pair => pair.split(nix).map(packet => JSON.parse(packet)));

export default pairs;