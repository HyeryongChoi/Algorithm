const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const n = Number(input);
  const fibo = [0, 1, 1];

  for (let i = 3; i <= n; i++) fibo[i] = fibo[i - 1] + fibo[i - 2];

  console.log(fibo[n]);
};

solution();
