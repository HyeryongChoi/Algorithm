function solution(s) {
    return s.split('').sort((a, b) => {
    if (a.toLowerCase() === a && b.toLowerCase() !== b) return -1;
    if (a.toLowerCase() !== a && b.toLowerCase() === b) return 1;
    
    return a.toLowerCase() < b.toLowerCase() ? 1 : -1; 
  }).join('');
}