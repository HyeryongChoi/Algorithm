/*
  dp[i] = i원을 만드는 동전의 최소 개수
        = min(dp[i-1], dp[i-2], dp[i-5], dp[i-7]) + 1
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const PRICE = Number(input[0]);
  const coins = [1, 2, 5, 7];
  const dp = new Array(PRICE + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= PRICE; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  console.log(dp[PRICE]);
};

solution();
