function mergeRanges([s1, e1], [s2, e2]) {
  return [Math.min(s1, s2), Math.max(e1, e2)];
}

function mergeAll(...ranges) {
  return ranges.reduce((prev, curr) => mergeRanges(prev, curr));
}

function doRangesOverlap([s1, e1], [s2, e2]) {
  return s1 <= e2 + 1 && e1 >= s2 - 1;
}

export default class Range {
  constructor() {
    this.ranges = [];
  }

  add(range) {
    const [start, end] = range;
    if (!this.ranges.length) {
      this.ranges.push([start, end]);
    } else {
      const overlappers = this.ranges.filter(r => doRangesOverlap(range, r));
      if (overlappers.length) {
        const nonOverlappers = this.ranges.filter(r => !overlappers.includes(r));
        this.ranges = [mergeAll(...overlappers, range), ...nonOverlappers];
      } else {
        this.ranges.push(range);
      }
    }
  }

  exceeds(max) {
    return this.ranges.some(range => range[0] <= 0 && range[1] >= max)
  }

  sort() {
    this.ranges.sort((a, b) => a[0] - b[0]);
  }

  toString() {
    return this.ranges.toString();
  }

  getLength() {
    // assuming one solid range
    return this.ranges[0][1] - this.ranges[0][0];
  }

  getGap() {
    // we assume two ranges left and exactly one gap (only use this on the solved range :) )
    this.sort();
    return this.ranges[0][1] + 1;
  }
}