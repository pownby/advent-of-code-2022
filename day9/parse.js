const input = Deno.readTextFileSync('input.txt').trim();

const moves = input.split(/\n/);

export default moves.map(move => {
  const [dir, dist] = move.split(' ');
  return { dir, dist: Number(dist) };
});