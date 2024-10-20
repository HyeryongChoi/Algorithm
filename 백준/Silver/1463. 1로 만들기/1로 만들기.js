const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const start = parseInt(input[0], 10);
  const dp = new Array(start * 3 + 1).fill(1e9);

  dp[start] = 0;

  for (let i = start - 1; i >= 1; i--) {
    dp[i] = Math.min(dp[i * 3], dp[i * 2], dp[i + 1]) + 1;
  }

  console.log(dp[1]);
};

solution();
