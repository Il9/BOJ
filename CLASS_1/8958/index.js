const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [, ...oxStrings] = input;

console.log(
  oxStrings
  .map(oxString => oxString.replace(/^(X+)|(X+)$/g, '').replace(/(X+)/g, 'X').split('X').map(oGroup => oGroup.length))
  .map(serialOLengths => serialOLengths.map(serialOLength => serialOLength * (serialOLength + 1) / 2).reduce((acc, cur) => acc + cur, 0))
  .join('\n')
);