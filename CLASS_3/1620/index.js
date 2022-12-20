const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [NMString, ...lines] = input;
const [N, M] = NMString.split(' ').map(Number);

const map = new Map();
let answer = '';

for (let i = 0; i < N + M; i++) {
  if (i < N) {
    const key = String(i + 1);
    const pokemon = lines[i];

    map.set(key, pokemon);
    map.set(pokemon, key);
  } else {
    const question = lines[i];

    answer += `\n${map.get(question)}`;
  }
}

console.log(answer.slice(1));
