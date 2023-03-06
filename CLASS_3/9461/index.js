const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const P = [1, 1, 1];
  const N = Number(input[i]);

  if (N < 3) {
    console.log(P[N]);
    continue;
  }

  for (let j = 3; j < N; j++) {
    P[j] = P[j - 2] + P[j - 3];
  }

  console.log(P.at(-1));
}
