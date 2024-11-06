/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const table = {};
    const newNums = [];

    // store the count of each num
    nums.forEach(num => {
        table[num] = (table[num] || 0) + 1;

        if(table[num] <= 2) newNums.push(num);
    });

    for(let i = 0; i < nums.length; i++) {
        if(i >= newNums.length) nums[i] = '_';
        else nums[i] = newNums[i];
    }

    return newNums.length;
};