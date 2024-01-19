// 412. Fizz Buzz

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let resultArray =  [];

    for(i=0; i < n; i++){
        if((i%3==0) && (i%5==0) && i!==0){
            resultArray[i] = "FizzBuzz"; 
        } else if (i%3==0 && i!==0){
            resultArray[i] = "Fizz";
        } else if (i%5==0 && i!==0) {
            resultArray[i] = "Buzz";
        } else if (i==0){
            resultArray[i] == "1";
        } else {
            resultArray[i] = `${i}`;
        }
    }

    return resultArray;
};