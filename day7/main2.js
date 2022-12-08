import rootNode from "./parse.js";

const sizeList = rootNode.getSizeList();
const totalSize = rootNode.getSize();
const availableSpace = 70000000 - totalSize;
const neededSpace = 30000000 - availableSpace;

console.log(sizeList.reduce((min, curr) => {
  const newMin = Math.min(min, curr.size);
  return newMin >= neededSpace ? newMin : min;
}, totalSize));