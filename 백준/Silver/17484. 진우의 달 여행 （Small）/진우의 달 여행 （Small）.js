/**
 * 완탐 DFS
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [N, M] = input[0].split(' ').map(Number);
  const board = Array.from({ length: N }, (_, i) => input[i + 1].split(' ').map(Number));
  const dy = [1, 1, 1];
  const dx = [-1, 0, 1];
  let answer = Infinity;

  const search = (pos, sum, directions) => {
    const [y, x] = pos;

    // 끝에 도달한 경우
    if (y === N - 1) answer = Math.min(answer, sum);

    for (let d = 0; d < dx.length; d++) {
      const [ny, nx] = [y + dy[d], x + dx[d]];

      if (ny >= N || nx < 0 || nx >= M) continue;
      if (directions.at(-1) === dx[d]) continue;

      directions.push(dx[d]);
      search([ny, nx], sum + board[ny][nx], directions);
      directions.pop();
    }
  };

  for (let x = 0; x < M; x++) {
    search([0, x], board[0][x], []);
  }

  console.log(answer);
};

solution();
