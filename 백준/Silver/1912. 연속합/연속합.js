/**
 * dp[i] = A[i]가 마지막 원소일 때 -> A[i-1]를 선택하는 경우, 선택하지 않는 경우 수열 합 중 최대 값
 *       = max(dp[i-1] + A[i], A[i])
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const N = Number(input[0]);
  const numbers = input[1].split(' ').map(Number);
  const dp = new Array(N).fill(0);

  dp[0] = numbers[0];
  for (let i = 1; i < N; i++) {
    dp[i] = Math.max(dp[i - 1] + numbers[i], numbers[i]);
  }

  console.log(Math.max(...dp));
};

solution();
