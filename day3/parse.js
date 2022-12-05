const input = Deno.readTextFileSync('input.txt');

const rucksacks = input.trim().split(/\n/);

export default rucksacks;