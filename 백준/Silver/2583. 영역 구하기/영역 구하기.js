const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [m, n, k] = input[0].split(' ').map(Number);
  const board = Array.from({ length: m }, () => new Array(n).fill(0));
  let counts = [];

  for (let i = 1; i <= k; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);

    [y1, y2] = [m - y1, m - y2];

    for (let j = y2; j < y1; j++) {
      for (let k = x1; k < x2; k++) {
        board[j][k] = -1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        counts.push(0);
        board[i][j] = 1;
        dfs([i, j], board, counts);
      }
    }
  }

  console.log(counts.length);
  console.log(counts.sort((a, b) => a - b).join(' '));
};

const dfs = (now, board, counts) => {
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const [m, n] = [board.length, board[0].length];
  const [y, x] = now;

  counts[counts.length - 1] += 1;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
    if (board[ny][nx] === -1 || board[ny][nx] > 0) continue;

    board[ny][nx] = board[y][x] + 1;
    dfs([ny, nx], board, counts);
  }
};

solution();
