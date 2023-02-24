export default function overlapsCoords(r1, r2) {
  // probably not optimal, but I feel more reliable than trying to cover every scenario
  if (r1.overlapsX(r2) && r1.overlapsY(r2)) {
    const r2List = r2.getCoordList();
    return r1.getCoordList().some(coord => r2List.includes(coord));
  }
  return false;
}