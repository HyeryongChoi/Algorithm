const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const n = Number(input[0]);

  /*
  N = 1
  dp[1] = 1 (1)

  N = 2
  dp[2] = 1 (10)

  N = 3
  dp[3] = 2 (100, 101)

  N = 4
  dp[4] = 3 (1000, 1001, 1010)

  N = 5
  dp[5] = 5 (10000, 10001, 10010, 10100, 10101)

  N = 6
  dp[6] = 8 (100000, 100001, 100010, 100100, 101000, 101010, 101001, 100101)
  */

  dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);

  console.log(dp[n].toString());
};

solution();
