/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var storeInit = init;
    var currentValue = init
    
    var increment = function(){
        currentValue++
        return currentValue;
    };

    var decrement = function(){
        storeInit--
        return storeInit;
    };

    var reset = function(){
        init = storeInit;
        return init;
    };
    //
    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    };
    

    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */