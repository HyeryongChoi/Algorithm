/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxNum = Math.max(...candies);
    const result = [];

    candies.forEach(candy => {
        if(candy + extraCandies >= maxNum) result.push(true);
        else result.push(false);
    });

    return result;
};