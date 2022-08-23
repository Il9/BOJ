const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [lengthString, alphabetsString] = input;

const length = Number(lengthString);
const M = 1234567891;

let answer = 0;

function pow(r, i) {
  if (!i) return 1;

  return r * pow(r, i - 1) % M;
}

for (let i = 0; i < length; i++) {
  answer = answer + ((alphabetsString.charCodeAt(i) - 96) * pow(31, i));
}

console.log(answer % M);