const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [NMString, numbersString] = input;

const [N, M] = NMString.split(' ').map(Number);
const numbers = numbersString.split(' ').map(Number);

let min = 0;
let max = Math.max(...numbers);
let H;
let m;

while (min <= max) {
  H = Math.floor((min + max) / 2);
  m = 0;

  for (let i = 0; i < N; i++) {
    m += numbers[i] < H ? 0 : (numbers[i] - H);
  }

  if (M === m) {
    break;
  } else if (M < m) {
    min = H + 1;
  } else {
    max = H - 1;
  }
}

if (m < M) {
  console.log(H - 1);
} else {
  console.log(H);
}