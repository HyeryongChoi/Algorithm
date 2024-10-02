/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let current = n;
    // 7 -> 49 -> 16 + 81 = 97 -> 81 + 49 = 130 => 1 + 9 = 10 => 1 

    while (true) {
        let str = String(current);

        if(str.length <= 1 && (!str.includes('1') || !str.includes('7'))) return false;

        current = 0;

        for(let num of str) {
            current += Number(num)*Number(num);
        }

        if(current === 1) return true;
    }

};