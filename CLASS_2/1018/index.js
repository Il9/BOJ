const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [NMString, ...rows] = input;

const [N, M] = NMString.split(' ').map(Number);

const SIZE = 8;

let answer = null;

function getPaintCount(board) {
  const colorMap = { B: 'W', W: 'B' };

  return Math.min(
    ...['B', 'W'].map(firstColor => {
      let colorBuffer = firstColor;
      let paintCount = 0;

      for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
          if (board[i][j] !== colorBuffer) paintCount = paintCount + 1;
          colorBuffer = colorMap[colorBuffer];
        }
        colorBuffer = colorMap[colorBuffer];
      }

      return paintCount;
    })
  );
}

for (let i = SIZE; i <= N; i++) {
  for (let j = SIZE; j <= M; j++) {
    const board = rows.slice(i - SIZE, i).map(row => row.slice(j - SIZE, j));
    const paintCount = getPaintCount(board);

    answer = answer === null || answer > paintCount ? paintCount : answer;
  }
}

console.log(answer);
