/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    const durations = [releaseTimes[0]];
    let maxDuration = {
        index: 0,
        duration: durations[0],
    };

    for(let i = 1; i < keysPressed.length; i++) {
        durations[i] = releaseTimes[i] - releaseTimes[i-1];
   
        if(durations[i] === maxDuration.duration && keysPressed[i] <= keysPressed[maxDuration.index]) continue;

        if(maxDuration.duration <= durations[i]) {
            maxDuration.index = i;
            maxDuration.duration = durations[i];
        }
    }

    return keysPressed[maxDuration.index];
};