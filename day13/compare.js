
export function compareValue(left, right) {
  if (typeof left === 'number') {
    if (typeof right === 'number') {
      if (left < right) return true;
      if (right < left) return false;
      return null;
    }
    return compareLists([left], right);
  }

  if (typeof right === 'number') {
    return compareLists(left, [right]);
  }

  return compareLists(left, right);
}

export function compareLists(left, right) {
  let order = null;
  let i = 0;
  while (order === null) {
    if (left.length === i) {
      if (right.length === i) {
        return null;
      }
      return true;
    }
    if (right.length === i) {
      return false;
    }

    order = compareValue(left[i], right[i]);
    i++;
  }
  return order;
}