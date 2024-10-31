const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = Number(input[0]);
  const arr = [];

  for (let t = 1; t < N + 1; t++) {
    const [x, y] = input[t].split(' ').map(Number); // x, y

    arr.push([x, y]);
  }

  arr.sort((pos1, pos2) => {
    if (pos1[1] === pos2[1]) return pos1[0] - pos2[0];

    return pos1[1] - pos2[1];
  });

  console.log(arr.map((val) => val.join(' ')).join('\n'));
};

solution();
