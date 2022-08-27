const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [ABVString] = input;

const [A, B, V] = ABVString.split(' ').map(Number);

console.log(Math.ceil((V - A) / (A - B)) + 1);