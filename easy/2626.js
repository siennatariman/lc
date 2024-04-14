/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init
    // Execute fn on each element of the array
    if(nums.length == 0){
        return init
    } else {
        for(let i = 0; i<nums.length; i++){
            val = fn(val, nums[i])
        }
        return val
    }
    
};