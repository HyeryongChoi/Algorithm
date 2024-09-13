/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    const direction = {
        "UP": [-1, 0], // y-axis, x-axis
        "DOWN": [1, 0],
        "LEFT": [0, -1],
        "RIGHT": [0, 1],
    };

    let [y, x] = [0, 0];

    commands.forEach((command) => {
        y = y + direction[command][0];
        x = x + direction[command][1];
    });

    return (y * n) + x;
};