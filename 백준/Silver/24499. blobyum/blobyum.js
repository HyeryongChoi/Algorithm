const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [total, eat] = input[0].split(' ').map(Number);
  const scores = input[1].split(' ').map(Number);
  const circle = [...scores, ...scores];
  let answer = 0;
  let prev = 0;

  for (let i = 0; i < eat; i++) {
    answer += circle[i];
    prev = answer;
  }

  for (let i = 1; i <= total; i++) {
    const cur = prev - circle[i - 1] + circle[eat + i - 1];
    answer = Math.max(answer, cur);
    prev = cur;
  }

  console.log(answer);
};

solution();
