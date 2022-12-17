import Node from "./Node.js";

const input = Deno.readTextFileSync('input.txt').trim();

const lines = input.split(/\n/);

export const NUM_ROW = lines.length;
export const NUM_COL = lines[0].length;
export default lines.map((line, row) => line.split('').map((c, col) => new Node(c, row, col)));