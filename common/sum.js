export default function sum(arr) {
  return arr.reduce((rollingSum, count) => rollingSum + count, 0);
}