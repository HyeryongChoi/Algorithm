function solution(maps) {
    return bfs([0,0], maps);
}

function bfs(start, maps) {
    const [n, m] = [maps.length, maps[0].length];
    const visited = Array.from({length: n}, () => Array(m).fill(0));
    const queue = [start];
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    visited[start[0]][start[1]] = 1;
    
    while(queue.length) {
        const [y, x] = queue.shift();
        
        for(let i = 0; i < dy.length; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if(ny >= n || ny < 0 || nx >= m || nx < 0) continue;
            if(maps[ny][nx] === 0) continue;
            if(visited[ny][nx]) continue;
            
            queue.push([ny,nx]);
            visited[ny][nx] = visited[y][x] + 1;
        }
    }
    
    return visited[n-1][m-1] > 0 ? visited[n-1][m-1] : -1;
}