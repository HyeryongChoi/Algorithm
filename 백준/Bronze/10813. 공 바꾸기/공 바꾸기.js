const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [n, m] = input[0].split(' ').map((el) => +el); // 공개수, m번 교환
  const balls = Array.from({ length: n }, (_, index) => index + 1);

  for (let i = 1; i <= m; i++) {
    const [idx1, idx2] = input[i].split(' ').map((el) => +el - 1);
    const temp = balls[idx1];

    balls[idx1] = balls[idx2];
    balls[idx2] = temp;
  }

  console.log(balls.join(' '));
};

solution();
