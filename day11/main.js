import monkeys from "./input.js";

for (let i = 0; i < 20; i++) {
  monkeys.forEach((monkey) => {
    const { items, op, test } = monkey;
    items.forEach(item => {
      let val = op(item);
      val = Math.trunc(val / 3);
      const nextMonkey = test(val);
      monkeys[nextMonkey].items.push(val);
      monkey.count = monkey.count ? monkey.count + 1 : 1;
    });
    items.splice(0, items.length);
  });
}

const monkeyBusiness = monkeys.map(m => m.count).sort((a, b) => b - a);
console.log(monkeyBusiness[0] * monkeyBusiness[1]);