function solution(x, n) {
    return new Array(n).fill(0).map((_, index) => x*(index+1))
}