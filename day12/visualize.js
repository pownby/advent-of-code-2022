import nodes, { NUM_ROW, NUM_COL } from "./parse.js";

const GREEN = ["color: green", "color: default"];

export default function visualize(path) {
  nodes.forEach(row => {
    let line = '';
    let colors = [];
    row.forEach(node => {
      if (path.includes(node)) {
        line += `%c${node.symb}%c`;
        colors = colors.concat(GREEN);
      } else {
        line += node.symb;
      }
    });
    console.log(line, ...colors);
  });
}