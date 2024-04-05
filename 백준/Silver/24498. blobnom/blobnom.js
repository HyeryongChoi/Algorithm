const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const n = +input[0];
  const arr = input[1].split(' ').map(Number);
  let result = Math.max(...arr);

  for (let i = 1; i < n - 1; i++) {
    result = Math.max(result, arr[i] + Math.min(arr[i - 1], arr[i + 1]));
  }

  console.log(result);
};

solution();
