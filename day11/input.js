function isDiv(n, k) {
  return n % k === 0;
}

export default [
  {
    items: [72, 64, 51, 57, 93, 97, 68],
    op: (n) => n * 19,
    care: 17,
    test: (n) => isDiv(n, 17) ? 4 : 7
  },
  {
    items: [62],
    op: (n) => n * 11,
    care: 3,
    test: (n) => isDiv(n, 3) ? 3 : 2
  },
  {
    items: [57, 94, 69, 79, 72],
    op: (n) => n + 6,
    care: 19,
    test: (n) => isDiv(n, 19) ? 0 : 4
  },
  {
    items: [80, 64, 92, 93, 64, 56],
    op: (n) => n + 5,
    care: 7,
    test: (n) => isDiv(n, 7) ? 2 : 0
  },
  {
    items: [70, 88, 95, 99, 78, 72, 65, 94],
    op: (n) => n + 7,
    care: 2,
    test: (n) => isDiv(n, 2) ? 7 : 5
  },
  {
    items: [57, 95, 81, 61],
    op: (n) => n * n,
    care: 5,
    test: (n) => isDiv(n, 5) ? 1 : 6
  },
  {
    items: [79, 99],
    op: (n) => n + 2,
    care: 11,
    test: (n) => isDiv(n, 11) ? 3 : 1
  },
  {
    items: [68, 98, 62],
    op: (n) => n + 3,
    care: 13,
    test: (n) => isDiv(n, 13) ? 5 : 6
  }
];