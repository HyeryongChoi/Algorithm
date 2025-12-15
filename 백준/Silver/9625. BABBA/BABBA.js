/*
  (k >= 2)
  A[k] = A[k-1] + A[k-2]
  B[k] = B[k-1] + B[k-2]
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const N = Number(input[0]);
  const A = new Array(N + 1).fill(0);
  const B = new Array(N + 1).fill(0);

  A[0] = 1;
  A[1] = 0;
  B[0] = 0;
  B[1] = 1;

  for (let i = 2; i <= N; i++) {
    A[i] = A[i - 1] + A[i - 2];
    B[i] = B[i - 1] + B[i - 2];
  }

  console.log(`${A[N]} ${B[N]}`);
};

solution();
