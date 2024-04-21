class Solution {
    boolean solution(String s) {
        int count1 = 0;
        int count2 = 0;
        
        s = s.toUpperCase();

        for (int i = 0; i < s.length(); i++){
            if (s.charAt(i) == 'Y') count1 += 1;
            if (s.charAt(i) == 'P') count2 += 1;
        }
        
        return count1 == count2;
    }
}