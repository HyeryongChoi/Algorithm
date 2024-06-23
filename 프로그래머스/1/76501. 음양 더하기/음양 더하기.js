function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i)=> acc + (signs[i] ? val : val*(-1)), 0);
}