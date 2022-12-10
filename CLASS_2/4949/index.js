const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const answer = input.slice(0, -1).map(string => {
  let s = string.replace(/[^(\(|\)|\[|\])]/g, '');

  while (s.includes('()') || s.includes('[]')) {
    s = s.replace(/((\(\))|(\[\]))/g, '');
  }

  return s.length ? 'no' : 'yes';
});

console.log(answer.join('\n'));
