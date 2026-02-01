const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const cantor = (origin, start, length) => {
    if (length === 1) return;

    const third = length / 3;

    cantor(origin, start, third); // 왼쪽
    for (let i = start + third; i < start + third * 2; i++) origin[i] = ' ';
    cantor(origin, start + third * 2, third); // 오른쪽
  };

  for (const line of input) {
    const exponent = Number(line);
    const length = 3 ** exponent;
    const arr = new Array(length).fill('-');

    cantor(arr, 0, length);
    console.log(arr.join(''));
  }
};

solution();
