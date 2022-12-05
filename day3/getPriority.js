export default function getPriority(c) {
  const value = c.charCodeAt(0);
  if (value >= 65 && value <= 90) {
    // capital
    return value - 38;
  }
  // lower
  return value - 96;
}