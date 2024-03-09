/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var storage = n;

    return function() {
        if(storage == n){
            storage++;
            return n;
        } else {
            return storage++;
        }
    };
    
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */