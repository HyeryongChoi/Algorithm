function solution(s) {
    const start = (s.length % 2) === 0 ? Math.floor(s.length / 2) - 1 : Math.floor(s.length / 2);
    const end = (s.length % 2) === 0 ? start + 2 : start + 1;
    const answer = s.substring(start, end);
    
    return answer;
}