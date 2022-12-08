import sum from "../common/sum.js";

class Dir {
  constructor(symb, parent) {
    this.symb = symb;
    this.parent = parent;
    this.dirs = {};
    this.files = {};
  }

  cd = function(symb) {
    if (symb === '/') {
      return root;
    } else if (symb === '..') {
      return this.parent;
    }

    if (!this.dirs[symb]) {
      this.dirs[symb] = new Dir(symb, this);
    }

    return this.dirs[symb]
  }

  addContents = function(contents) {
    contents.forEach(line => {
      if (line.startsWith('d')) {
        const symb = line.slice(4);
        if (!this.dirs[symb]) {
          this.dirs[symb] = new Dir(symb, this);
        }
      } else {
        const [size, symb] = line.split(' ');
        if (!this.files[symb]) {
          this.files[symb] = Number(size);
        }
      }
    });
  }

  getSize = function() {
    // could use dynamic programming here if we need to trim execution time
    return sum(Object.values(this.files)) + sum(Object.values(this.dirs).map(dir => dir.getSize()));
  }

  getSizeList = function() {
    return [{ symb: this.symb, size: this.getSize() }, ...Object.values(this.dirs).map(dir => dir.getSizeList()).flat()];
  }
}

export const root = new Dir('/');
export default Dir;