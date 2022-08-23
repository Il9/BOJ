const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [numbersString] = input;

const [number1, number2] = numbersString.split(' ').map(Number);

function gcd(number1, number2) {
  if (!number2) return number1;

  return gcd(number2, number1 % number2);
}

function lcm(number1, number2) {
  return number1 * number2 / gcd(number1, number2);
}

console.log(gcd(number1, number2));
console.log(lcm(number1, number2));