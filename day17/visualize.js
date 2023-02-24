const template = [0, 1, 2, 3, 4, 5, 6];

export function visualizeSolution(rocks, maxHeight) {
  const includedCoords = rocks.filter(rock => rock.y0 < maxHeight).map(rock => rock.getCoordList()).flat();
  for (let j = maxHeight - 1; j >= 1; j--) {
    const coords = template.map(x => `${x}:${j}`);
    const line = coords.map(coord => includedCoords.includes(coord) ? '#' : '.').join('');
    console.log(`|${line}|`)
  }
  console.log('+-------+');
}

export function visualizeStep(rocks, rockStep) {
  const maxHeight = rockStep.y1 + 1;
  const includedCoords = rocks.filter(rock => rock.y0 < maxHeight).map(rock => rock.getCoordList()).flat();
  const stepCoords = rockStep.getCoordList();
  for (let j = maxHeight - 1; j >= 1; j--) {
    const coords = template.map(x => `${x}:${j}`);
    const line = coords.map(coord => stepCoords.includes(coord) ? '@' : includedCoords.includes(coord) ? '#' : '.').join('');
    console.log(`|${line}|`)
  }
  console.log('+-------+');
  console.log('');
}