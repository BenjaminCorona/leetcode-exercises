/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    if (sentence.length < 26) return false;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let char of alphabet) {
        if (!sentence.includes(char)) return false;
    }
    return true;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("leetcode")); // false
