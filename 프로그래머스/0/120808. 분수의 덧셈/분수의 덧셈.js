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
    return num1 % num2 ? getGCD(num2, num1%num2) : num2;
}