/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    console.log("s:", s);
    let word = s.trim().split(" ")
    let lastWord = s.trim().split(" ").length
    console.log("lastWord:", lastWord);
    return word[lastWord - 1].length;

};

let length = lengthOfLastWord("Hello  world " );
console.log("length:", length);