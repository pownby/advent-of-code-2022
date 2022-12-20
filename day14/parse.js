import { win, nix } from "../common/lineEndings.js";
import Rock from "./Rock.js";

const input = Deno.readTextFileSync('input.txt').trim();

const rocks = input.split(nix).map(line => new Rock(line.split(' -> ')));

export default rocks;