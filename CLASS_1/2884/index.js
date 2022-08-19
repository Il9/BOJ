const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [numberString] = input;

const [hour, minute] = numberString.split(' ').map(Number);

const h = hour - (minute < 45 ? 1 : 0);
const m = minute - 45;

console.log(h < 0 ? 23 : h, m < 0 ? 60 + m : m);