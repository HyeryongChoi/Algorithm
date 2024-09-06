function solution(n) {
    let result = 1;
    
    for(let i = 1; i <= n; i++) {
        if(factorial(i) > n) break;
        
        result = i;
    }
    
    return result;
}

function factorial(n) {
    if (n == 1) return 1;
    
    return n * factorial(n-1);
}