const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const N = Number(input[0]);
  const fibo = (n) => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
  };

  console.log(fibo(N));
};

solution();
