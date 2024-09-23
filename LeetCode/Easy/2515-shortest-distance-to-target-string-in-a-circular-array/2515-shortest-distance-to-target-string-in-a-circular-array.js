/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    const n = words.length;
    const STEP = 1;
    let distance = 0;
    let [left, right] = [startIndex, startIndex];

    while (distance < n) {
        if(words[left] === target || words[right] === target) return distance;

        left = (left - STEP + n) % n;
        right = (right + STEP) % n;
        distance += 1;
    }

    return -1;
};