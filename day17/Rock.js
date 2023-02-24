import overlaps from "../common/overlaps.js";
import overlapsCoords from "./overlapsCoords.js";

export const TYPE = {
  HLINE: 'HLINE',
  CROSS: 'CROSS',
  ANGLE: 'ANGLE',
  VLINE: 'VLINE',
  SQUARE: 'SQUARE'
};

const MAX_X = 6;

export default class Rock {
  constructor(baseHeight, type) {
    this.type = type;
    this.x0 = 2;
    this.x1 = this.calcRight(this.x0);
    this.y0 = baseHeight + 4;
    this.y1 = this.calcTop(this.y0);
    this.atRest = false;
  }

  top() {
    return this.y1;
  }

  move(move, rocks) {
    return move && (move === "<" ? this.moveLeft(rocks) : this.moveRight(rocks));
  }

  moveLeft(rocks) {
    if (this.x0 === 0) {
      return false;
    }
    this.x0 = this.x0 - 1;
    this.x1 = this.x1 - 1;
    if (rocks.some(rock => this.intersects(rock))) {
      this.x0 = this.x0 + 1;
      this.x1 = this.x1 + 1;
      return false;
    }
    return true;
  }

  moveRight(rocks) {
    if (this.x1 === MAX_X) {
      return false;
    }
    this.x0 = this.x0 + 1;
    this.x1 = this.x1 + 1;
    if (rocks.some(rock => this.intersects(rock))) {
      this.x0 = this.x0 - 1;
      this.x1 = this.x1 - 1;
      return false;
    }
    return true;
  }

  overlapsX(rock) {
    return overlaps(this.x0, this.x1, rock.x0, rock.x1);
  }

  overlapsY(rock) {
    return overlaps(this.y0, this.y1, rock.y0, rock.y1);
  }

  moveDown(rocks) {
    if (this.isOnGround()) {
      return false;
    }
    this.y0 = this.y0 - 1;
    this.y1 = this.y1 - 1;
    if (rocks.some(rock => this.intersects(rock))) {
      this.y0 = this.y0 + 1;
      this.y1 = this.y1 + 1;
      this.atRest = true;
      return false;
    }
    return true;
  }

  isOnGround() {
    return this.y0 === 1;
  }

  intersects(rock) {
    if (this.y0 > rock.y1 || this.y1 < rock.y0 || this.x0 > rock.x1 || this.x1 < rock.x0) {
      return false;
    }
    return overlapsCoords(this, rock);
  }

  memoCoordList(coordList) {
    if (this.atRest) {
      this.coordList = coordList;
    }
    return coordList;
  }
}