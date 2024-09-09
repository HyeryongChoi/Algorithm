/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];  
    const startPosList = [];
    let answer = false;

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === word[0]) startPosList.push([i,j]);
        }
    }

    if(word.length === 1) {
        if(startPosList.length > 0) return true;
        return false;
    }

    for(let now of startPosList) {
        const visited = Array.from({length: board.length}, ()=>Array(board[0].length).fill(false));
        
        visited[now[0]][now[1]] = true;
        dfs(now, word[0], visited);

        if(answer) return true;
    }

    return answer;

    function dfs(now, result, visited) {
        if(result === word) {
            answer = true;
            return;
        }

        if(result !== word.slice(0, result.length)) return;

        const [y,x] = now;

        for(let dir = 0; dir < 4; dir++) {
            const ny = y + dy[dir];
            const nx = x + dx[dir];

            if(ny < 0 || ny >= board.length) continue;
            if(nx < 0 || nx >= board[0].length) continue;
            if(visited[ny][nx]) continue;

            visited[ny][nx] = true;
            dfs([ny,nx], result+board[ny][nx], visited);
            visited[ny][nx] = false;
        }
    }
};