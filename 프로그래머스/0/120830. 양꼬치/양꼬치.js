function solution(n, k) {
    const price1 = 12000
    const price2 = 2000
    const service = Math.floor(n/10)
    
    return n * price1 + (k-service) * price2
}