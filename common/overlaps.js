export default function overlaps(a0, a1, b0, b1) {
  const d0 = a0 - b1;
  const d1 = a1 - b0;
  return !d0 || !d1 || Math.sign(d0) !== Math.sign(d1);
}