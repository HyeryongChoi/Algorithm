/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const answer = [];
    let a = nums[0];

    nums.forEach((num, i, origin) => {
        // if (num + 1) is not nums[i + 1], add the range into the answer
        if(i+1 < origin.length && (num+1) !== origin[i+1] || i === origin.length - 1) {
            answer.push([a, num]);
            a = origin[i+1];
        }
    });

    return answer.map(([a,b]) => {
        if (a===b) return a.toString();
        else return `${a}->${b}`;
    });
};