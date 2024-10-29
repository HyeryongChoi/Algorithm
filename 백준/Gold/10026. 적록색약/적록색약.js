const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const n = Number(input[0]);
  const board = [];
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  let visited = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 1; i <= n; i++) board.push(input[i].split(''));

  const bfs = (target, start) => {
    const queue = [];

    queue.push(start);

    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
      const [y, x] = queue.shift();

      for (let d = 0; d < 4; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
        if (visited[ny][nx] || board[ny][nx] !== target) continue;

        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  };

  // 적록색약 X
  let count1 = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) continue;

      count1 += 1;
      bfs(board[i][j], [i, j]);
    }
  }

  // 적록색약
  let count2 = 0;

  visited = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'G') board[i][j] = 'R';
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) continue;

      count2 += 1;
      bfs(board[i][j], [i, j]);
    }
  }

  console.log(count1, count2, (end = ' '));
};

solution();
