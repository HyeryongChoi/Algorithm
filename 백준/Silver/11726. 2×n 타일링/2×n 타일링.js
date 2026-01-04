/**
 * 2xn 타일링
 * dp[n] = dp[n-1] + dp[n-2];
 *       = (2xn-1타일에 2x1 타일 놓는 방법 수) + (2xn-2타일에 1x2 타일 놓는 방법 수)
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const N = Number(input[0]);
  const dp = new Array(N + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= N; i++) {
    dp[i] = ((dp[i - 1] % 10_007) + (dp[i - 2] % 10_007)) % 10_007;
  }

  console.log(dp[N]);
};

solution();
