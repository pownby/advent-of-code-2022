export let start;
export let end;
export default class Node {
  constructor(symb, row, col) {
    if (symb === 'S') {
      this.height = 0;
      this.isStart = true;
      start = this;
    } else if (symb === 'E') {
      this.height = 25;
      this.isExit = true;
      end = this;
    } else {
      this.height = symb.charCodeAt(0) - 97;
    }

    this.symb = symb;
    this.row = row;
    this.col = col;
  }

  canAccess(target) {
    return (target.height - 1 <= this.height);
  }

  toString() {
    return `${this.col}:${this.row}`;
  }

  toStringLong() {
    return `(${this.symb}) ${this.col}:${this.row}`;
  }
}