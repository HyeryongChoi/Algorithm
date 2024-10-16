const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [n, m] = input[0].split(' ').map(Number);
  const board = [];
  const dist = Array.from({ length: n }, () => new Array(m).fill(0));
  const target = [n - 1, m - 1];

  for (let i = 1; i <= n; i++) {
    const arr = input[i].split('').map(Number);
    board.push(arr);
  }

  const START = [0, 0];
  const queue = [START];
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < dy.length; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
      if (board[ny][nx] === 0 || dist[ny][nx] > 0) continue;

      dist[ny][nx] = dist[y][x] + 1;
      queue.push([ny, nx]);

      if (ny === target[0] && nx === target[1]) {
        console.log(dist[ny][nx] + 1);
        return;
      }
    }
  }
};

solution();
