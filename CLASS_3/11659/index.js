const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [N, M] = input.shift().split(' ');
const numbers = input.shift().split(' ').map(Number);

const dp = [];

for (let k = 1; k <= N; k++) {
  dp[k] = (dp[k - 1] ?? 0) + numbers[k - 1];
}

let answer = '';

for (let l = 0; l < M; l++) {
  const [i, j] = input.at(l).split(' ').map(Number);

  answer += `\n${dp[j] - (dp[i - 1] ?? 0)}`;
}

console.log(answer.substring(1));
