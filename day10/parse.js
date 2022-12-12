const input = Deno.readTextFileSync('input.txt').trim();

const instructions = input.split(/\n/);

export default instructions;