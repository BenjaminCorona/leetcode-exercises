/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let score = 0;
    if (2 <= s.length && s.length <= 100) {
        for (let i = 0; i < s.length; i++) {
            if (i + 1 === s.length) break;

            score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
        }
    }
    return score;
};

