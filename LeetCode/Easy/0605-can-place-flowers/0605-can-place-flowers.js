/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = n;

    for(let i = 0; i < flowerbed.length; i++) {
        const isLeftEmpty = i-1 < 0 || flowerbed[i-1] === 0;
        const isRightEmpty = i+1 >= flowerbed.length || flowerbed.length && flowerbed[i+1] === 0;

        if (count === 0) break;

        if (flowerbed[i] === 0 && isLeftEmpty && isRightEmpty){
            flowerbed[i] = 1;
            count -= 1;
        }
    }

    return count <= 0;
};