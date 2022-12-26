const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const N = Number(input.shift());

const cache = new Map([
  [1, 0],
  [2, 1],
  [3, 1],
]);

const getMin = n => {
  if (cache.has(n)) {
    return cache.get(n);
  }

  const min =
    Math.min(
      ...[
        !(n % 3) ? getMin(n / 3) : null,
        !(n % 2) ? getMin(n / 2) : null,
        n % 3 || n % 2 ? getMin(n - 1) : null,
      ].filter(v => v)
    ) + 1;

  cache.set(n, min);

  return min;
};

console.log(getMin(N));
