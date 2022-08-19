const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [lengthString, ...tests] = input;

for (let i = 0; i < Number(lengthString); i++) {
  const [repeat, string] = tests[i].split(' ');

  console.log(string.replace(/([^\s])/g, '$1'.repeat(repeat)));
}