/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    const n = words.length;
    let distance = n;

    for(let i = 0; i < n; i++) {
        if(words[(startIndex+i) % n] === target) {
            distance = Math.min(distance, Math.min(i, n-i));
        }
    }

    return distance === n ? -1 : distance;
};