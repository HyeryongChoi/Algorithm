/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const indexObj = {};

    for(let i = 0; i < nums.length; i++) {
        if(!indexObj[nums[i]]) indexObj[nums[i]] = [];
        
        indexObj[nums[i]].push(i);

        if(indexObj[nums[i]]?.length >= 2) {
            let [start, end] = [0, 1];
            let indexList = indexObj[nums[i]];

            while(start < end && end < indexList.length) {
                if (Math.abs(indexList[start] - indexList[end]) <= k) return true;
                else {
                    start += 1;
                    end += 1;
                }
            }
        }
    }

    return false;
};