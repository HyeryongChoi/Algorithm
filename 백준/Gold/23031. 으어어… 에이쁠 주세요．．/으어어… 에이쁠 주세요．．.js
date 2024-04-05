const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const n = +input[0];
  const order = input[1].split('');
  const board = [];
  const zombis = [];
  let isKijeol = false;
  let result = 'Phew...';

  // Z 학생좀비, S 형광등 스위치, 0빈칸
  for (let i = 2; i < n + 2; i++) {
    board.push(input[i].split(''));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') board[i][j] = 0; // 빈칸
      if (board[i][j] === 'Z') {
        board[i][j] = 1;
        zombis.push([i, j, 2]); // 행, 열, 바라보고있는 방향
      }
      if (board[i][j] === 'S') board[i][j] = -1; // 스위치있는 칸 -1, 스위치 없이 불 켜진 칸 -2
    }
  }

  if (zombis.length === 0) return result;

  // 위0 오른쪽1 아래2 왼쪽3, 왼쪽위, 오른쪽위, 왼쪽아래, 오른쪽아래
  let see = 2;
  const dy = [-1, 0, 1, 0, -1, -1, 1, 1];
  const dx = [0, 1, 0, -1, -1, 1, -1, 1];

  // 현재 위치
  let y = 0;
  let x = 0;

  while (order.length > 0 && !isKijeol) {
    const way = order.shift();
    let ny;
    let nx;

    if (way === 'F') {
      // 앞으로 1칸
      ny = y + dy[see];
      nx = x + dx[see];

      if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
        // 벽이 아닌 경우에만 이동
        y = ny;
        x = nx;

        if (board[ny][nx] === -1) {
          // 스위치가 있는 경우
          for (let i = 0; i < 8; i++) {
            const sy = ny + dy[i];
            const sx = nx + dx[i];

            if (sy < 0 || sy >= n || sx < 0 || sx >= n) continue;
            if (board[sy][sx] === -1) continue; // 스위치가 있는 경우는 pass

            board[sy][sx] = -2; // 형광등 on
          }
        }
      }
    }

    if (way === 'L') {
      // 왼쪽으로 90도 회전
      see = see - 1 < 0 ? 3 : see - 1;
    }

    if (way === 'R') {
      // 오른쪽으로 90도 회전
      see = (see + 1) % 4;
    }

    // 불이 꺼져있고 좀비가 있는 경우
    if (board[y][x] === 1) isKijeol = true;

    // 좀비들 이동
    zombis.forEach((zombi) => {
      let ny = zombi[0] + dy[zombi[2]]; // 행
      let nx = zombi[1] + dx[zombi[2]]; // 열

      if (ny < 0 || ny >= n || nx < 0 || nx >= n) {
        // 벽을 만나면
        zombi[2] = zombi[2] === 0 ? 2 : 0; // 반대방향으로 전환
      } else {
        if (board[zombi[0]][zombi[1]] > 0) board[zombi[0]][zombi[1]] -= 1; // 좀비가 이동했으니 이전 자리는 1을 빼줌

        zombi[0] = ny;
        zombi[1] = nx;

        if (board[ny][nx] >= 0) board[ny][nx] += 1; // 빈칸 or 다른 좀비가 있는 경우 +1, 스위치가 있거나 형광등이 켜져있는 경우 X
      }
    });

    // 불이 꺼져있고 좀비가 있는 경우
    if (board[y][x] === 1) isKijeol = true;
  }

  return isKijeol ? 'Aaaaaah!' : 'Phew...';
}

console.log(solution());
