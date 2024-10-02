/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sCount = {};
    const tCount = {};

    if(s.length !== t.length) return false;

    s.split('').forEach(letter => {
        sCount[letter] = (sCount[letter] || 0) + 1;
    });

    t.split('').forEach(letter => {
        tCount[letter] = (tCount[letter] || 0) + 1;
    });

    for(let [letter, count] of Object.entries(sCount)) {
        if(count !== tCount[letter]) return false;
    }

    return true;
};