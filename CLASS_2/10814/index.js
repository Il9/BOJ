const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [, ...members] = input;

members.sort((a, b) => {
  const age1 = Number(a.match(/^\d+/g)[0]);
  const age2 = Number(b.match(/^\d+/g)[0]);

  return age1 === age2 ? 1 : age1 > age2 ? 1 : -1;
});

console.log(members.join('\n'));
