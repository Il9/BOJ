const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [NString, ...numbersString] = input;

const N = Number(NString);
const numbers = numbersString.map(Number);

let answer = [];
let stack = [];
let now = 0;

for (let i = 0; i < N; i++) {
  const number = numbers[i];
  const top = stack.at(-1) ?? 0;

  if (top === number) {
    stack.pop();
    answer.push('-');
  } else if (top < number && now < number) {
    while (now < number) {
      now++;
      stack.push(now);
      answer.push('+');
    }

    stack.pop();
    answer.push('-');
  } else {
    answer = ['NO'];
    break;
  }
}

console.log(answer.join('\n'));
