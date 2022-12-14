import monkeys from "./input.js";

const maxMonkeyCare = monkeys.map(m => m.care).reduce((a, b) => a * b);

for (let i = 0; i < 10000; i++) {
  monkeys.forEach((monkey) => {
    const { items, op, test } = monkey;
    items.forEach(item => {
      let val = op(item);
      const nextMonkey = test(val);
      monkeys[nextMonkey].items.push(val % maxMonkeyCare);
      monkey.count = monkey.count ? monkey.count + 1 : 1;
    });
    items.splice(0, items.length);
  });
}

const monkeyBusiness = monkeys.map(m => m.count).sort((a, b) => b - a);
console.log(monkeyBusiness[0] * monkeyBusiness[1]);