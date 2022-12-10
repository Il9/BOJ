const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

let [string] = input;
let most = { text: null, length: 0, same: false };

while (string.length) {
  const text = string.charAt(0);
  const length = string.length;

  string = string.replace(new RegExp(`[${text.toLowerCase()}${text.toUpperCase()}]`, 'g'), '');

  const removedLength = length - string.length;

  if (removedLength > most.length) {
    most = { text: text, length: removedLength, same: false };
  } else if (removedLength === most.length) {
    most = { ...most, same: true };
  }
}

console.log(most.same ? '?' : most.text.toUpperCase());
