const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

/**
 * BFS 판자 개수 구하기
 */
const solution = () => {
  const [N, M] = input[0].split(' ').map(Number);
  const board = Array.from({ length: N }, (_, i) => [...input[i + 1]]);
  const visited = Array.from({ length: N }, () => new Array(M).fill(0));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] > 0) continue;

      visited[i][j] = ++count;
      BFS([i, j], count);
    }
  }

  function BFS(start, count) {
    let [dy, dx] = [0, 0];
    const queue = [start];
    const shape = board[start[0]][start[1]];

    // - 인 경우 right
    if (shape === '-') [dy, dx] = [0, 1];

    // | 인 경우 down
    if (shape === '|') [dy, dx] = [1, 0];

    while (queue.length > 0) {
      const [y, x] = queue.pop();
      const ny = y + dy;
      const nx = x + dx;

      if (ny >= N || nx >= M || board[ny][nx] !== shape) break;
      visited[ny][nx] = count;
      queue.push([ny, nx]);
    }
  }

  console.log(count);
};
solution();
