export default function max(arr) {
  return arr.reduce((rollingMax, val) => Math.max(rollingMax, val), 0);
}