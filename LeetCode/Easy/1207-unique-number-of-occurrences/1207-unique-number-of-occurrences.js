/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const count = {};

    for(let data of arr) {
        count[data] = (count[data] || 0) + 1;
    }

    const occurrences = Object.values(count);
    const dataSet = new Set(occurrences);

    return dataSet.size === occurrences.length;
};