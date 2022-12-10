const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const numbersStrings = input;

numbersStrings.slice(0, -1).forEach(numbersString => {
  const widths = numbersString.split(' ').map(Number);

  const c = Math.max(...widths);
  const [a, b] = widths.filter(width => width !== c);

  console.log(a * a + b * b === c * c ? 'right' : 'wrong');
});
