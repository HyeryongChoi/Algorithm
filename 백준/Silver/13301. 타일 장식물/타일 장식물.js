/*
  dp[n] = 정사각형 타일 한 변의 길이 = dp[n-1] + dp[n-2];
  answer[n] = n개 타일이 구성하는 직사각형 둘레 = dp[n] * 2 + (dp[n] + dp[n-1]) * 2
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const N = Number(input[0]);
  const dp = new Array(N + 1).fill(-1n);

  dp[0] = 0n;
  dp[1] = 1n;

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  const answer = dp[N] * 2n + (dp[N] + dp[N - 1]) * 2n;
  console.log(answer.toString());
};

solution();
