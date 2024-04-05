const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [m, n] = input[0].split(' ').map(Number);
  const board = [];
  const targets = [];

  for (let i = 1; i <= n; i++) {
    row = input[i].split(' ').map(Number);
    board.push(row);

    // 익은 토마토 위치 저장
    row.forEach((val, index) => {
      if (val === 1) targets.push([i - 1, index]);
    });
  }

  let answer = 0;

  if (!board.flatMap((x) => x).some((x) => x === 0)) {
    console.log(0);
    return;
  }

  // 익은 토마토 위치에서 각각 넓혀 나갈 수 있도록 큐에 넣음
  const bfs = (targets) => {
    const queue = [...targets];
    let front = 0;

    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];

    while (front < queue.length) {
      const [y, x] = queue[front++];

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
        if (board[ny][nx] !== 0) continue;

        queue.push([ny, nx]);
        board[ny][nx] = board[y][x] + 1;
        answer = Math.max(answer, board[ny][nx]);
      }
    }
  };

  bfs(targets);

  for (let i = 0; i < n; i++) {
    if (board[i].some((val) => val === 0)) {
      console.log(-1);
      return;
    }
  }

  console.log(answer - 1);
};

solution();
