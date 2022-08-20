const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [numbersString] = input;

const [x, y, endX, endY] = numbersString.split(' ').map(Number);

console.log([x, y, endX - x, endY - y].reduce((acc, cur) => acc > cur ? cur : acc, x));