const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [NString] = input;

const N = Number(NString);

if (N <= 7) {
  if ([3, 5].includes(N)) {
    console.log(1);
  } else if (N === 6) {
    console.log(2);
  } else {
    console.log(-1);
  }
} else {
  console.log(Math.floor(N / 5) + [0, 1, 2, 1, 2][N % 5]);
}
