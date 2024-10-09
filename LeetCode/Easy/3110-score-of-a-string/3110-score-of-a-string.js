/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    return s.split('').reduce((score, str, index, origin) => {
        if(index === origin.length -1) return score;

        return score + Math.abs(origin[index].charCodeAt() - origin[index+1].charCodeAt());
    }, 0)
};