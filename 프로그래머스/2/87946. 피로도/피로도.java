class Solution {
    public int answer = 0;
    public boolean[] visited;
    
    public int solution(int k, int[][] dungeons) {
        // 현재 피로도 k, 각 던전별 [최소 피로도, 소모 피로도]
        // 유저가 탐험할 수 있는 최대 던전 수?
        
        visited = new boolean[dungeons.length]; // visited 초기화
        
        dfs(0, k, dungeons);
        
        return answer;
    }
    
    // dfs로 순열만들어서 탐험
    public void dfs(int count, int result, int[][] dungeons) {
        for (int i = 0; i < dungeons.length; i++) {
            if (visited[i] || result < dungeons[i][0]) continue;

            visited[i] = true;
            dfs(count+1, result - dungeons[i][1], dungeons);
            visited[i] = false;
        }
        
        answer = Math.max(answer, count);
    }
}