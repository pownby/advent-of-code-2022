const calorieList = require('./parse.js');
const sum = require('./sum.js');

console.log(
  calorieList.reduce((max, elf) => {
    return Math.max(sum(elf), max);
  }, 0)
);

