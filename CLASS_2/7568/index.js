const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [, ...WHStrings] = input;

const HWs = WHStrings.map(HWString => HWString.split(' ').map(Number));

const counts = HWs.map(([H, W], index) => HWs.reduce((acc, [h, w], i) => (H < h && W < w ? acc + 1 : acc), 1));

console.log(counts.join(' '));
