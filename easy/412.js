// 412. Fizz Buzz

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let resultArray =  [];
    let m=1;
    for(let i=0; i < n; i++){
        if((m%3==0) && (m%5==0)){
            resultArray[i] = "FizzBuzz";
        } else if(m%3==0){
            resultArray[i] = "Fizz";
        } else if(m%5==0){
            resultArray[i] = "Buzz";
        } else {
            resultArray[i] = `${m}`;
        }
        m++;
    }

    return resultArray;
};

