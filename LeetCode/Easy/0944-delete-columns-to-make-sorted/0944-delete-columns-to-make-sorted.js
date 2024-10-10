/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let num = 0;

    for(let j = 0; j < strs[0].length; j++) {
        let prev = 0;

        for(let i = 0; i < strs.length; i++) {
            let cur = strs[i][j].charCodeAt();

            if(prev > cur) {
                num +=1;
                break;
            }

            prev = cur;
        }
    }

    return num;
};