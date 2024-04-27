import java.util.*;

class Solution {
    public int solution(int distance, int[] rocks, int n) {
        int answer = 0;
        
        // 바위 위치 오름차순 정렬
        Arrays.sort(rocks);
        
        // 바위 간격 이분탐색
        int start = 1, end = distance;
        
        while (start <= end) {
            int mid = (start+end)/2;
            
            int removeCount = 0;
            int prevRock = 0;
            
            // mid만큼의 간격보다 더 가까이에 있는 바위 제거
            for(int i = 0; i < rocks.length; i++) {
                if (removeCount > n) break;
                
                if(rocks[i]-prevRock < mid) removeCount += 1;
                else prevRock = rocks[i];
            }
            if(distance - prevRock < mid) removeCount += 1;
             
            if (removeCount > n) end = mid - 1;
            else {
                start = mid + 1;
                answer = mid;
            }
        }
        
        return answer;
    }
}