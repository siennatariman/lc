/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    defaultValue = null;

    var toBe = function(valOne){
        if(val===valOne){
            return true;
        } else {
            throw new Error("Not Equal");
        }
    };

    var notToBe = function(valTwo){
        if((val ?? defaultValue) !== (valTwo ?? defaultValue)){
            return true;
        } else {
            throw new Error("Equal");
        }
    };

    return {
        toBe: toBe,
        notToBe: notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */