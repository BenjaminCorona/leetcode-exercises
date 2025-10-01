/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    obj = Object.keys(obj);
    if (Object.keys(obj).length > 0) {
        return false;
    } else {
        return true;
    }
};

let isObjEmpty = isEmpty({});
console.log("isObjEmpty:", isObjEmpty);

let isArrEmpty = isEmpty([1,2,3]);
console.log("isArrEmpty:", isArrEmpty);