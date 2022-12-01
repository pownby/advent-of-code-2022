const calorieList = require('./parse.js');
const sum = require('./sum.js');

const totals = calorieList.map(elf => sum(elf));
totals.sort((a, b) => b - a);
console.log(sum(totals.slice(0, 3)));