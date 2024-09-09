/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let answer = [];
    let minIndexSum = 2000;

    for(let i = 0; i < list1.length; i++) {
        for(let j = 0; j < list2.length; j++) {
            if(list1[i] === list2[j]) {
                if((i + j) === minIndexSum) answer.push(list1[i]);
                else if((i + j) < minIndexSum) {
                    minIndexSum = i + j;
                    answer = [list1[i]];
                }

                break;
            }
        }
    }

    return answer;
};