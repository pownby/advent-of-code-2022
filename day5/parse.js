const inputStacks = Deno.readTextFileSync('input_stacks.txt');
const inputMoves = Deno.readTextFileSync('input_moves.txt');

export const stacks = inputStacks.trim().split(/\r\n/).map(stack => stack.split(''));
export const moves = inputMoves.trim().split(/\n/).map(move => [...move.matchAll(RegExp(/\d+/g))].map(n => Number(n)));