const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [, ...PSs] = input;

PSs.forEach(PS => {
  while (PS.includes('()')) {
    PS = PS.replaceAll('()', '');
  }

  console.log(PS.length ? 'NO' : 'YES');
})