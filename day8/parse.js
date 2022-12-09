const input = Deno.readTextFileSync('input.txt').trim();

const lines = input.split(/\n/);

const trees = lines.map(line => [...line].map(n => ({ size: Number(n) })));

export default trees;