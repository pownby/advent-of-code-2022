import trees from "./parse.js";
import max from "../common/max.js";

const MAX_X = trees[0].length - 1;
const MAX_Y = trees.length - 1;

function getTree(x, y) {
  return trees[y][x];
}

function getLook(checkBaseCondition, getNewArgs) {
  const fn = (tree, x, y) => {
    if (checkBaseCondition(x, y)) {
      return 0;
    }

    const checkTree = getTree(x, y);
    if (checkTree.size >= tree.size) {
      return 1;
    }
    return 1 + fn(tree, ...getNewArgs(x, y));
  }

  return fn;
}

const lookRight = getLook((x, y) => x > MAX_X, (x, y) => [x + 1, y]);
const lookLeft = getLook((x, y) => x < 0, (x, y) => [x - 1, y]);
const lookDown = getLook((x, y) => y > MAX_Y, (x, y) => [x, y + 1]);
const lookUp = getLook((x, y) => y < 0, (x, y) => [x, y - 1]);

function getScore(tree, x, y) {
  return lookDown(tree, x, y + 1) * lookUp(tree, x, y - 1) * lookLeft(tree, x - 1, y) * lookRight(tree, x + 1, y);
}

for (let j = 0; j < trees.length; j++) {
  const row = trees[j];
  for (let i = 0; i < row.length; i++) {
    const tree = row[i];
    tree.score = getScore(tree, i, j);
  }
}

console.log(max(trees.map(row => max(row.map(t => t.score)))));