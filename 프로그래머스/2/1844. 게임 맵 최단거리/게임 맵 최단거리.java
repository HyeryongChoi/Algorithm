import java.util.*;

class Solution {
    int answer = -1;
    int[] dy = new int[] {-1, 1, 0, 0};
    int[] dx = new int[] {0, 0, -1, 1};
    
    public int solution(int[][] maps) {
        bfs(new int[] {0, 0}, maps);
        
        return answer;
    }
    
    public void bfs(int[] start, int[][] maps){
        int n = maps.length, m = maps[0].length;
        int[] target = new int[] {n-1, m-1};
        int[][] visited = new int[n][m];
        
        Queue<int[]> q = new LinkedList<>();
        
        q.offer(start);
        visited[start[0]][start[1]] = 1;
        
        while (q.size() > 0) {
            int[] now = q.poll();
            int y = now[0];
            int x = now[1];
            
            if (y==target[0] && x == target[1]) {
                answer = visited[y][x];
                break;
            }
            
            for(int dir = 0; dir < 4; dir++) {
                int ny = y + dy[dir];
                int nx = x + dx[dir];
                
                if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                if (maps[ny][nx] == 0) continue;
                if (visited[ny][nx] > 0) continue;
                
                q.offer(new int[] {ny, nx});
                visited[ny][nx] = visited[y][x] + 1;
            }
        }
    }
}