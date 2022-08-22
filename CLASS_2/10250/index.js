const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [lengthString, ...HWNStrings] = input;

const length = Number(lengthString);
const HWNs = HWNStrings.map(HWNString => HWNString.split(' ').map(Number));

for (let i = 0; i < length; i++) {
  const [H, W, N] = HWNs[i];

  const w = Math.ceil(N / H);
  const h = N - H * (w - 1);

  console.log(`${h}${w < 10 ? '0' : ''}${w}`);
}