/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const countNums = {};
    let i = 0;

    while(i < nums.length) {
        countNums[nums[i]] = (countNums[nums[i]] || 0) + 1;

        if(countNums[nums[i]] > 1) {
            countNums[nums[i]] -= 1;
            nums.splice(i, 1);
        } else {
            i += 1;
        }
    }

    return nums.length;
};