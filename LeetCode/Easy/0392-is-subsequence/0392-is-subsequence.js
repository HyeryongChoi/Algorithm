/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const arr = s.split('');
    
    let [start, end] = [0, t.length-1];

    while(start <= end) {
        if(arr.length === 0) return true;

        if(start === end) end = -1;

        if(arr[0] === t[start++]) arr.shift();
    
        if(arr.at(-1) === t[end--]) arr.pop();
    }

    return arr.length === 0 ? true: false;
};