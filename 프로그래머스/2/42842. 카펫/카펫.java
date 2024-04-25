class Solution {
    public int[] solution(int brown, int yellow) {
        // brown = 가로*2 + 세로*2 + 4
        // yellow = 가로*세로
        
        for (int w = yellow; w >= 1; w--) {
            if (yellow % w != 0) continue;
            
            int h = yellow / w;
            
            if (brown == w*2 + h*2 + 4) {
                return new int[] {w+2, h+2};
            }
        }
        
        return null;
    }
}