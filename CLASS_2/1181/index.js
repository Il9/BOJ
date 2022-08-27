const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [, ..._words] = input;

const words = Array.from(new Set(_words));

words.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a.charCodeAt(i) < b.charCodeAt(i)) {
        return -1;
      } else if (a.charCodeAt(i) > b.charCodeAt(i)) {
        return 1;
      }
    }
  }
});

console.log(words.join('\n'));