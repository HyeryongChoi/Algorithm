import java.util.*;

class Solution {
    public int answer = 0;
    public int index = 0;
    public char[] alphabets = {'A','E','I','O','U'};
    public ArrayList<String> words = new ArrayList<>();
    
    public int solution(String word) {
        dfs("", word);
        
        Collections.sort(words); // 오름차순 정렬
        
        for(int i = 0; i < words.size(); i++) {
            if (word.equals(words.get(i))) {
                answer = i+1;
                break;
            }
        }
        
        return answer;
    }
    
    public void dfs(String result, String word) {
        if (result.length() == 5) return;
        
        for (int i = 0; i < alphabets.length; i++) {
            words.add(result+alphabets[i]);
            
            dfs(result+alphabets[i], word);
        }
    }
}