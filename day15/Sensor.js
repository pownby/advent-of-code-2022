function computeDistance(x, y, beaconX, beaconY) {
  return Math.abs(x - beaconX) + Math.abs(y - beaconY);
}

export default class Sensor {
  constructor([x, y, beaconX, beaconY]) {
    this.x = x;
    this.y = y;
    this.beaconX = beaconX;
    this.beaconY = beaconY;

    this.distance = computeDistance(x, y, beaconX, beaconY);
    this.startY = this.y - this.distance;
    this.endY = this.y + this.distance;
  }

  getXRangeAt(y) {
    const deltaX = this.distance - Math.abs(y - this.y);
    if (deltaX < 0) return null;
    return [this.x - deltaX, this.x + deltaX];
  }
}