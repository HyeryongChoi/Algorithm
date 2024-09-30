/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let i = 0;
    let number = 0;
    const romanPairs = new Set(['IV', 'IX', 'XL', 'XC', 'CD', 'CM']);
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    while(i < s.length) {
        if(i+1 < s.length && romanPairs.has(s[i]+s[i+1])) number -= romans[s[i++]];
        else number += romans[s[i++]];
    }
    
    return number;
};