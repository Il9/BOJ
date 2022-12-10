const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [number] = input;

console.log(Math.floor(number / 5) + Math.floor(number / 25) + Math.floor(number / 125));
