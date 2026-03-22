const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [N, K] = input[0].split(' ').map(Number); // 재료수, 고를 재료 수
  let index = 1;
  const scoreBoard = Array.from({ length: N }, () => input[index++].split(' ').map(Number));
  const total = 2 ** (N + 1) - 1;
  let answer = -Infinity;

  for (let i = 0; i <= total; i++) {
    const indexes = [];
    let totalScore = 0;

    // 재료 고르기
    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) indexes.push(j);
    }

    if (indexes.length !== K) continue;

    // 점수 계산
    for (let y = 0; y < indexes.length; y++) {
      for (let x = y + 1; x < indexes.length; x++) {
        totalScore += scoreBoard[indexes[y]][indexes[x]];
      }
    }

    answer = Math.max(answer, totalScore);
  }

  console.log(answer);
};

solution();
