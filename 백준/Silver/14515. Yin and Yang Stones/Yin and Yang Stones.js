/**
 * B: K개 / W: K개 === B 1개, W 1개(B K-1개, W K개) -> 1
 * B: K+1개 / W: K개 === B 2개, W 1개(B K-1개, W K개) -> 0
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const stones = input[0].split('');
  const count = { W: 0, B: 0 };

  stones.forEach((val) => {
    if (val === 'W') count.W = count.W + 1;
    else count.B = count.B + 1;
  });

  const answer = count.W === count.B ? 1 : 0;

  console.log(answer);
};

solution();
