function solution(numbers) {
    let answer = 0;
    const numberSet = new Set(numbers);
    
    Array(10).fill(0).map((_, i) => i).forEach(val => {
        if(!numberSet.has(val)) answer += val;
    })
    
    return answer;
}