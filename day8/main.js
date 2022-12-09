import trees from "./parse.js";

function checkFromLeft(row) {
  let threshold = -1;

  for (let i = 0; i < row.length; i++) {
    const tree = row[i];
    if (tree.size > threshold) {
      tree.visible = true;
      threshold = tree.size;
    }
  }
}

function checkFromRight(row) {
  let threshold = -1;
  
  for (let i = row.length - 1; i >= 0; i--) {
    const tree = row[i];
    if (tree.size > threshold) {
      tree.visible = true;
      threshold = tree.size;
    }
  }
}

// first check rows
for (let i = 0; i < trees.length; i++) {
  const row = trees[i];
  checkFromLeft(row);
  checkFromRight(row);
}

// now columns
for (let i = 0; i < trees[0].length; i++) {
  const row = trees.map(row => row[i]);
  checkFromLeft(row);
  checkFromRight(row);
}

console.log(trees.reduce((count, row) => {
  return count + row.filter(tree => tree.visible).length;
}, 0));