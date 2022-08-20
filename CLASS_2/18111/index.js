const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [numbersString, ...blockGroupStrings] = input;

const [x, y, inven] = numbersString.split(' ').map(Number);
const blocks = blockGroupStrings.map(blockGroupString => blockGroupString.split(' ').map(Number)).flat();

const {maxHeight, minHeight} = blocks.reduce((acc, cur) => {
  if (acc.maxHeight < cur) {
    return {
      ...acc,
      maxHeight: cur
    }
  }

  if (acc.minHeight > cur) {
    return {
      ...acc,
      minHeight: cur
    }
  }

  return acc;
}, {maxHeight: blocks[0], minHeight: blocks[0]});

let first = null;

for (let i = maxHeight; i >= minHeight; i--) {
  let iv = inven;

  let time = 0;

  for (let j = 0; j < blocks.length; j++) {
    const block = blocks[j];
    let t = 0;

    if (block > i) {
      iv = iv + (block - i); 
      t = 2 * (block - i)
    } else if (block < i) {
      iv = iv - (i - block); 
      t = 1 * (i - block)
    }

    time = time + t;
  }

  if (iv >= 0 && (!first || first.time > time)) {
    first = {
      time,
      height: i
    }
  }
}

console.log(first.time, first.height);