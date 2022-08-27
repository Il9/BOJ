const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [numberString] = input;

const N = Number(numberString);

let dn = 666;
let i = 1;

while (N > i) {
    dn++;

    if (/.*666.*/.test(dn)) {
        i++;
    }
}

console.log(dn);