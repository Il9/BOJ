const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const coins = input.map(Number);

let left = K;
let answer = 0;

for (let i = N - 1; i >= 0; i--) {
  const coin = coins[i];
  const subCount = Math.floor(left / coin);

  if (subCount > 0) {
    answer = answer + subCount;
    left = left - coin * subCount;
  }

  if (left === 0) {
    break;
  }
}

console.log(answer);
