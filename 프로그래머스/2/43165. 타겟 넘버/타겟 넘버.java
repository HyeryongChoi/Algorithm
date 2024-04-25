class Solution {
    public int answer = 0;
    
    public int solution(int[] numbers, int target) {
        dfs(0, 0, target, numbers);
        
        return answer;
    }
    
    public void dfs(int index, int result, int target, int[] numbers) {        
        if (index >= numbers.length) {
            if (result == target) answer += 1;
            
            return;
        }
        
       
        dfs(index+1, result + numbers[index], target, numbers);
        dfs(index+1, result - numbers[index], target, numbers);
    }
}