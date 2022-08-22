const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [NMString, numbersString] = input;

const [N, M] = NMString.split(' ').map(Number);
const numbers = numbersString.split(' ').map(Number);

let answer = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = numbers[i] + numbers[j] + numbers[k];

      if (sum <= M && answer < sum) {
        answer = sum;
      }
    }
  }
}

console.log(answer);