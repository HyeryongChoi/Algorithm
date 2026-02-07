const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

/**
 * dp[i][j] = 길이 i, 마지막 숫자 j인 계단수 개수
 */
const solution = () => {
  const N = Number(input[0]);
  const dp = Array.from({ length: N + 1 }, () => new Array(10).fill(0));
  const MOD = 1_000_000_000;

  // 길이가 1인 계단수 초기화
  for (let i = 1; i <= 9; i++) dp[1][i] = 1;

  for (let i = 2; i <= N; i++) {
    dp[i][0] = dp[i - 1][1]; // 길이 i-1이고 마지막 숫자 1인 계단수 개수
    dp[i][9] = dp[i - 1][8]; // 길이 i-1이고 마지막 숫자 8인 계단수 개수
    for (let j = 1; j < 9; j++) {
      // 길이 i-1이고 마지막 숫자 j-1 또는 j+1인 계단수 개수
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
  }

  console.log(dp[N].reduce((acc, val) => (acc + val) % MOD, 0));
};

solution();
