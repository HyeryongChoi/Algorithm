/**
 * max(비어있는 행의 개수, 비어있는 열의 개수)
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [rows, cols] = input[0].split(' ').map(Number);
  const board = Array.from({ length: rows }, (_, i) => input[i + 1].split('').map((val) => (val === '.' ? 0 : 1)));
  const emptyRowCount = board.filter((row) => row.every((col) => col === 0)).length;
  const emptyColCount = [...Array(cols).keys()].filter((col) => board.every((row) => row[col] === 0)).length;

  console.log(Math.max(emptyRowCount, emptyColCount));
};

solution();
