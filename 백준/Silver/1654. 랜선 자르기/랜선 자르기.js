const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [k, n] = input[0].split(' ').map(Number);
  const lens = new Array(k).fill(0).map((_, i) => Number(input[i + 1]));

  let [start, end] = [1, Math.max(...lens)];
  let answer = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    const count = lens.reduce((acc, val) => {
      return acc + parseInt(val / mid);
    }, 0);

    if (count >= n) {
      start = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }

  console.log(answer);
};

solution();
