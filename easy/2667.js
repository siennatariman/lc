/**
 * @return {Function}
 */
var createHelloWorld = function(...args) {
    

    return function(...args) {
        console.log("Hello World");
    }
};

createHelloWorld();
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


/**
 * In JavaScript, the rest parameter syntax (...args)
 * allows a function to accept an indefinite number of arguments as an array.
 * When used inside a function's parameter list,
 * it collects any remaining arguments into an array.
 */