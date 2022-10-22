const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [NString, NNumbersString, MString, MNumbersString] = input;
const [N, NNumbers, M, MNumbers] = [Number(NString), NNumbersString.split(' ').map(Number), Number(MString), MNumbersString.split(' ').map(Number)];

const NMap = new Map();

for (let i = 0; i < N; i++) {
  const number = NNumbers[i];

  NMap.set(number, (NMap.get(number) ?? 0) + 1);
}

let answer = '';
for (let i = 0; i < M; i++) {
  const number = MNumbers[i];

  answer += i ? ' ' : '';
  answer += NMap.get(number) ?? 0;
}

console.log(answer);