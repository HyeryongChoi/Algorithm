/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const allCountries = new Set();
    const route = {};

    paths.forEach((path) => {
        const [to, from] = path;

        route[to] = true;

        allCountries.add(to);
        allCountries.add(from);
    });

    for(let country of allCountries) if(!route[country]) return country;
};