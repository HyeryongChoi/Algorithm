/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const indexObj = {};

    for(let i = 0; i < nums.length; i++) {
        if(indexObj[nums[i]] >= 0) {
            const diff = Math.abs(i - indexObj[nums[i]]);

            if(diff <= k) return true;
        }

        indexObj[nums[i]] = i;
    }

    return false;
};