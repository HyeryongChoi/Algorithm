const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [_, Q] = input[0].split(' ').map(Number); // 수열 길이, 질문 개수
  const a = input[1].split(' ').map(Number);
  const b = [0, ...a];
  const answer = [];

  b.sort((a, b) => a - b);

  // 누적합 구하기
  const sums = new Array(b.length + 1).fill(0);
  for (let i = 1; i < b.length; i++) {
    sums[i] = sums[i - 1] + b[i];
  }

  for (let t = 2; t < 2 + Q; t++) {
    const [L, R] = input[t].split(' ').map(Number);
    const result = sums[R] - sums[L - 1];

    answer.push(result);
  }

  console.log(answer.join('\n'));
};

solution();
