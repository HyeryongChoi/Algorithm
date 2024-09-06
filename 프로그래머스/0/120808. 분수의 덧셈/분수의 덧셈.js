function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1*denom2 + numer2*denom1;
    let denom = denom1 * denom2;
    
    // 분자와 분모의 최대 공약수 찾기
    const gcd = getGCD(numer, denom);
    
    // 최대 공약수로 나누기
    numer = numer/gcd;
    denom = denom/gcd;
    
    return [numer, denom];
}

function getGCD(num1, num2) {
    let gcd = 1;
    
    if(num1 > num2) [num1, num2] = [num2, num1];
    
    for(let i = 2; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) gcd = i;
    }
    
    return gcd;
}