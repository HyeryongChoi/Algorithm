/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let countS = {};
    let countT = {};

    s.split('').forEach(data => {
        countS[data] = (countS[data] || 0) + 1;
    });

    t.split('').forEach(data => {
        countT[data] = (countT[data] || 0) + 1;
    });

    for(let key in countS) {
        if(countS[key] !== countT[key]) return false;
    }

    return true;
};