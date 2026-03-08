const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

/**
 * dp[i] = dp[i-1] + dp[i-2]*2
 *       = 2x(i-1) 직사각형에 2x1 타일을 채워 2xi 직사각형을 만드는 방법 수 +
 *         2x(i-2) 직사각형에 1x2 타일 또는 2x2 타일을 채워 2xi 직사각형을 만드는 방법 수
 */
const solution = () => {
  const MAX = 251;
  const dp = new Array(MAX).fill(0n);

  dp[0] = 1n;
  dp[1] = 1n;
  for (let i = 2; i < MAX; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] * 2n;
  }

  const answer = input
    .map(Number)
    .map((n) => dp[n])
    .join('\n');

  console.log(answer);
};
solution();
