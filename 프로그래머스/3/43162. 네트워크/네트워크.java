import java.util.*;

class Solution {
    boolean[] visited;
    ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
    
    public int solution(int n, int[][] computers) {
        int answer = 0;
        
        visited = new boolean[n];
        
        // 내부 ArrayList 할당
        for(int i = 0; i < n; i++) graph.add(new ArrayList<>());
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if (computers[i][j] == 1) {
                    graph.get(i).add(j);
                    graph.get(j).add(i);    
                }
            }
        }
        
        for(int i = 0; i < n; i++) {
            if (visited[i]) continue;
            if (bfs(i) > 0) answer += 1;
        }
        
        return answer;
    }
    
    int bfs(int start) {
        Queue<Integer> q = new LinkedList<>(Arrays.asList(start));
        int count = 1;
        
        visited[start] = true; // 방문 체크
        
        while (q.size() > 0) {
            int now = q.poll();
            
            for(int next:graph.get(now)) {
                if (visited[next]) continue;
                
                count += 1;
                q.add(next);
                visited[next] = true;
            }
        }
        
        return count;
    }
}