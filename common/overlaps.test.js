import overlaps from "./overlaps.js";

console.log(overlaps(0, 3, 4, 8) === false);
console.log(overlaps(0, 4, 4, 8) === true);
console.log(overlaps(0, 5, 4, 8) === true);
console.log(overlaps(4, 8, 1, 3) === false);
console.log(overlaps(4, 8, 1, 4) === true);
console.log(overlaps(4, 8, 1, 5) === true);
