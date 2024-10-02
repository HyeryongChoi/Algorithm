/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexMap = {};

    for(let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const rest = target - current;

        if(rest in indexMap) {
            return [i, indexMap[rest]];
        }

        indexMap[current] = i;
    }
};