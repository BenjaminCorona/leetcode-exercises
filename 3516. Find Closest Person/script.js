/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    distx = Math.abs(x - z);
    disty = Math.abs(y - z);

    if (distx < disty) return 1;
    if (disty < distx) return 2;
    if (distx === disty) return 0;
};

console.log(findClosest(1, 5, 3));
