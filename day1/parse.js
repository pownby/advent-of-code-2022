const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const calorieLists = input.trim().split(/\r\n\r\n/).map(elf => elf.split(/\r\n/).map(n => Number(n)));

module.exports = calorieLists;