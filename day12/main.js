import nodes, { NUM_ROW, NUM_COL } from "./parse.js";
import { start, end } from "./Node.js";
import visualize from "./visualize.js";

function getPathString(path) {
  return path && path.map(n => n.toStringLong());
}

function getRightPath(node, path) {
  const { row, col } = node;

  if (col < NUM_COL - 1) {
    const right = nodes[row][col + 1];
    if (right.canAccess(node)) {
      return findPath(right, path);
    }
  }
}

function getLeftPath(node, path) {
  const { row, col } = node;

  if (col > 0) {
    const left = nodes[row][col - 1];
    if (left.canAccess(node)) {
      return findPath(left, path);
    }
  }
}

function getDownPath(node, path) {
  const { row, col } = node;

  if (row < NUM_ROW - 1) {
    const down = nodes[row + 1][col];
    if (down.canAccess(node)) {
      return findPath(down, path);
    }
  }
}

function getUpPath(node, path) {
  const { row, col } = node;

  if (row > 0) {
    const up = nodes[row - 1][col];
    if (up.canAccess(node)) {
      return findPath(up, path);
    }
  }
}

const orderMap = {
  'right': getRightPath,
  'left': getLeftPath,
  'down': getDownPath,
  'up': getUpPath
};

function getPathOrder(node) {
  // choose direction greedily
  const dx = end.col - node.col;
  const dy = end.row - node.row;

  const distance = {
    'right': dx,
    'left': -1 * dx,
    'down': dy,
    'up': -1 * dy
  };

  return Object.entries(distance).sort((a, b) => a[1] - b[1]).map(entry => orderMap[entry[0]]);
}

function findPath(node, path) {
  if (node.path) {
    if (path.length + 1 >= node.path.length) {
      return null;
    } else {
      node.path = [node, ...path];
    }
  } else {
    node.path = [node, ...path];
  }

  if (node === start) {
    return node.path;
  }

  const possiblePaths = getPathOrder(node).map(fn => fn(node, node.path)).filter(Boolean);
  if (!possiblePaths.length) {
    return null;
  }

  return possiblePaths.reduce((prev, curr) => prev.length < curr.length ? prev : curr);
}

findPath(end, []);
console.log(start.path.length - 1);
visualize(start.path);