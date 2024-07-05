function solution(arr) {
    const minNum = Math.min(...arr);
    const answer = arr.filter(val => val > minNum);
    
    return answer.length > 0 ? answer : [-1];
}