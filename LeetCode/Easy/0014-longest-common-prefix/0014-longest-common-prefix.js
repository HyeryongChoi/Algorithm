/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    
    strs.sort((a,b) => a.length - b.length);

    for(let i = 0; i < strs[0].length; i++) {
        if(strs.every(str => str[i] === strs[0][i])) prefix += strs[0][i];
        else return prefix;
    }

    return prefix;
};