import Dir, { root } from "./Dir.js";

const COM_CD = '$ c';
const COM_LS = '$ l';

const input = Deno.readTextFileSync('input.txt').trim();

const lines = input.split(/\n/);

function* buffer() {
  yield* lines;
}

let currentDir = root;
const iterator = buffer();

let next = iterator.next();

while (!next.done) {
  let { value: commandLine } = next;

  if (commandLine.startsWith(COM_CD)) {
    const symb = commandLine.slice(5);
    currentDir = currentDir.cd(symb);
    next = iterator.next();
  } else if (commandLine.startsWith(COM_LS)) {
    const contents = [];
    next = iterator.next();
    while (!next.done && !next.value.startsWith('$')) {
      contents.push(next.value);
      next = iterator.next();
    }
    currentDir.addContents(contents);
  }
}

export default root;