/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const uniq1 = [];
    const uniq2 = [];

    nums1.forEach(num => {
        if(!nums2.includes(num) && !uniq1.includes(num)) uniq1.push(num);
    });

    nums2.forEach(num => {
        if(!nums1.includes(num) && !uniq2.includes(num)) uniq2.push(num);
    });

    return [uniq1, uniq2];
};