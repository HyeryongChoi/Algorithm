function solution(number) {
    let answer = 0;
    
    function dfs(cur, threeNumbers, numbers = number) {
        if (threeNumbers.length === 3) {
            const sum = threeNumbers.reduce((acc, cur) => acc + cur, 0);
            
            if(sum === 0) answer += 1; 
            
            return;
        }
        
        for(let i = cur; i < numbers.length; i++) {
            dfs(i+1, [...threeNumbers, numbers[i]]);
        }
    }
    
    dfs(0, []);
    
    return answer;
}