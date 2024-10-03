/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const uniq1 = {};
    const uniq2 = {};

    nums1.forEach(num => {
        if(!nums2.includes(num) && !uniq1[num]) uniq1[num] = true;
    });

    nums2.forEach(num => {
        if(!nums1.includes(num) && !uniq2[num]) uniq2[num] = true;
    });

    return [Object.keys(uniq1).map(Number), Object.keys(uniq2).map(Number)];
};