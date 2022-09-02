const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [, ...coordinateStrings] = input;

const coordinates = coordinateStrings.map(coordinateString => coordinateString.split(' ').map(Number));

console.log(coordinates.sort(([ax, ay], [bx, by]) => ax > bx ? 1 : ax === bx ? ay > by ? 1 : -1 : -1 ).map(aa => aa.join(' ')).join('\n'));