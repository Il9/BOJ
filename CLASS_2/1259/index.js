const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const numberStrings = input;

function pNumber(numberString) {
  const match = numberString.match(/^(\d)(.*)(\d)$/);

  if (!match) {
    console.log('yes');
  } else {
    const [, left, numberString, right] = match;

    if (left === right) {
      pNumber(numberString);
    } else {
      console.log('no');
    }
  }
}

numberStrings.slice(0, -1).forEach(pNumber)