const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const map = new Map();
  let answer = 1;

  input.splice(0, N).forEach(clothes => {
    const kind = clothes.split(' ')[1];

    map.set(kind, (map.get(kind) ?? 0) + 1);
  });

  map.forEach(value => {
    answer *= value + 1;
  });

  console.log(answer - 1);
}
