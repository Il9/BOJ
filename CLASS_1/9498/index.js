const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [numberString] = input;

const [number] = numberString.split(' ').map(Number);

if (number > 89) {
  console.log('A');
} else if (number > 79) {
  console.log('B');
} else if (number > 69) {
  console.log('C');
} else if (number > 59) {
  console.log('D');
} else {
  console.log('F');
}