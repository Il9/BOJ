const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [string] = input;

const alphabets = Array.from(Array(26)).map((_, i) => String.fromCharCode(97 + i));

console.log(alphabets.map(alphabet => string.indexOf(alphabet)).join(' '));
