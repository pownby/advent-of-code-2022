import rucksacks from "./parse.js";
import getPriority from './getPriority.js';

let totalPriority = 0;

for (let i = 0; i < rucksacks.length; i += 3) {
  const regex = RegExp(`[${rucksacks[i]}]`, 'g');
  const matches = rucksacks[i + 1].matchAll(regex);
  const partialMatchString = [...matches].flat().join('');
  totalPriority += getPriority(RegExp(`[${partialMatchString}]`).exec(rucksacks[i + 2])[0]);
}

console.log(totalPriority);