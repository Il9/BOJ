const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const [NString, ...numbersString] = inputString.split('\n');

const numbers = numbersString.map(Number).sort((a, b) => a - b);

const average = Math.round(numbers.reduce((sum, number) => sum + number, 0) / numbers.length);
const center = numbers.at(Math.floor(numbers.length / 2));
const frequencyGroup = numbers.reduce((acc, number) => acc.set(number, (acc.get(number) ?? 0) + 1), new Map());
const maxFrequency = Math.max(...frequencyGroup.values());
const frequency = [...frequencyGroup.entries()].filter(([number, frequency]) => frequency === maxFrequency);
const range = numbers.at(-1) - numbers.at(0);

console.log(!average ? 0 : average);
console.log(center);
console.log(frequency.length > 1 ? frequency[1][0] : frequency[0][0]);
console.log(range);
