/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let result = 0;

    strs.forEach(str => {
        if(!Number(str) && Number(str) !== 0) result = Math.max(result, str.length);
        else result = Math.max(result, Number(str));
    });

    return result;
};