import java.util.*;

class Solution {
    class WordInfo {
        String word;
        int count;
        
        public WordInfo(String word, int count) {
            this.word = word;
            this.count = count;
        }
    }
    
    public int solution(String begin, String target, String[] words) {
        int answer = 0;
        Queue<WordInfo> q = new LinkedList<>();
        Map<String, Boolean> visited = new HashMap<>();
        
        q.offer(new WordInfo(begin, 0));
        visited.put(begin, true);
        
        if (!Arrays.stream(words).anyMatch(s -> s.equals(target))) return answer;
        
        while (q.size()>0) {
            WordInfo now = q.poll();
            
            if (target.equals(now.word)) {
                answer = now.count;
                break;
            } 
            
            for(String word:words) {
                if (visited.containsKey(word) && visited.get(word)) continue;
                if (!canChange(now.word, word)) continue;
                
                q.offer(new WordInfo(word, now.count+1));
                visited.put(word, true);
            }
        }
        
        return answer;
    }
    
    public boolean canChange(String begin, String word) {
        int count = 0;
        
        for(int i = 0; i < begin.length(); i++) {
            if (begin.charAt(i) != word.charAt(i)) count += 1;
            if (count > 1) return false;
        }
        
        return count == 1;
    }
}