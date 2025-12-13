/*
  (n>=2)
  f[n] = f[n-1] + f[n-2]
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const N = Number(input[0]);
  const dp = new Array(N + 1).fill(-1n);

  dp[0] = 0n;
  dp[1] = 1n;

  const fibo = (n) => {
    if (dp[n] !== -1n) return dp[n];
    dp[n] = fibo(n - 1) + fibo(n - 2);
    return dp[n];
  };

  console.log(fibo(N).toString());
};

solution();
