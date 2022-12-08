import rootNode from "./parse.js";
import sum from "../common/sum.js";

const sizeList = rootNode.getSizeList();

const targetDirs = sizeList.filter(dir => dir.size <= 100000);

console.log(sum(targetDirs.map(dir => dir.size)));