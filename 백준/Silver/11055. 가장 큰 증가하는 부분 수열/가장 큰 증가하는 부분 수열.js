/*
  dp[i] = A[i]를 선택했을 때, 증가하는 부분 수열 중 합이 가장 큰 것
        
  A[i]를 선택하는 경우 = max(dp[j])+A[i],  (0 <= j <= i-1, A[j] < A[i])
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const N = Number(input[0]);
  const A = input[1].split(' ').map(Number);
  const dp = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    dp[i] = A[i];
    for (let j = 0; j < i; j++) {
      if (A[j] >= A[i]) continue;
      dp[i] = Math.max(dp[i], dp[j] + A[i]);
    }
  }

  console.log(Math.max(...dp));
};

solution();
