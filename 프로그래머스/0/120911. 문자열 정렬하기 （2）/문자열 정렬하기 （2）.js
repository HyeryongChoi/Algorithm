function solution(my_string) {
    return my_string.split("").map(str => str.toLowerCase()).sort().join('');
}