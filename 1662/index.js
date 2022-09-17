const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [compressedString] = input;

const stack = [];
const buffer = [];
let depth = 0;

for (let i = 0; i < compressedString.length; i++) {
  const char = compressedString.charAt(i);

  if (stack[depth] === undefined) {
    stack[depth] = '';
    buffer[depth] = 0;
  }

  if (char === '(') {
    depth = depth + 1;
  } else if (char === ')') {
    depth = depth - 1;

    buffer[depth] = buffer[depth] + ((stack.pop().length + buffer[depth + 1]) * stack[depth].substring(stack[depth].length - 1));
    stack[depth] = stack[depth].substring(0, stack[depth].length - 1);
  } else {
    stack[depth] = stack[depth] + char;
  }
}

console.log(buffer[0] + stack[0].length);