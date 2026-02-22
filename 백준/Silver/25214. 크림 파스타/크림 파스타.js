const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const A = input[1].split(' ').map(Number);
  const answer = [];
  let maxDiff = 0;
  let min = A[0];

  A.forEach((cur) => {
    maxDiff = Math.max(maxDiff, cur - min);
    min = Math.min(min, cur);

    answer.push(maxDiff);
  });

  console.log(answer.join(' '));
};

solution();
