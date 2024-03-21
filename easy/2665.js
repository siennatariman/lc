/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var storeInit = init;

    var increment = function(){
        return init++;
    };

    var decrement = function(){
        return init--;
    };

    var reset = function(){
        init = storeInit;
        return init;
    };
    //
    

    //
};




/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */