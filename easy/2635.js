/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let transformedArr = [];

    for(let i = 0; i < arr.length; i++) {
        transformedArr[i] = fn(arr[i], i);
    }
};

//
//