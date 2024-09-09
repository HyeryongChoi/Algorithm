/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  let answer = false;

  const visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false));

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      visited[y][x] = true;
      dfs([y, x], board[y][x], visited);
      visited[y][x] = false;

      if (answer) return true;
    }
  }

  return answer;

  function dfs(now, result, visited) {
    if (result[result.length - 1] !== word[result.length - 1]) return;
    if (result.length === word.length) {
      answer = true;
      return;
    }

    const [y, x] = now;

    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];

      if (ny < 0 || ny >= board.length) continue;
      if (nx < 0 || nx >= board[0].length) continue;
      if (visited[ny][nx]) continue;

      visited[ny][nx] = true;
      dfs([ny, nx], result + board[ny][nx], visited);
      visited[ny][nx] = false;
    }
  }
};
