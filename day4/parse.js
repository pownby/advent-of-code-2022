const input = Deno.readTextFileSync('input.txt');

const pairs = input.trim().split(/\n/).map(pair => pair.split(',').map(assignment => assignment.split('-').map(n => Number(n))));

export default pairs;