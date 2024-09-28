/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const answer = [];
    const posList = [];

    s.split('').forEach((letter, index)=>{
        if(letter === c) posList.push(index);
    });

    s.split('').forEach((letter, index) => {
        let closestIndex = s.length-1;
        let closestDistance = s.length-1;

        for(let i of posList) {
            const distance = Math.abs(index - i);

            if(distance <= closestDistance) {
                closestIndex = i;
                closestDistance = distance;
            }
        }

        answer.push(closestDistance);
    });

    return answer;
};