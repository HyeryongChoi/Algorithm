/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    const [s1, e1] = [convertToMM(event1[0]), convertToMM(event1[1])];
    const [s2, e2] = [convertToMM(event2[0]), convertToMM(event2[1])];

    if(e1 < s2 || e2 < s1) return false;
    return true;
};

function convertToMM(time) {
    return time.split(':').reduce((acc,element,index)=>{
        if(index === 0) return acc + Number(element)*60;
        return acc + Number(element);
    }, 0);
}