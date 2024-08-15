/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums.forEach((i, idxi) => {
        nums.forEach((k, idxk) => {
            if(idxi != idxk && i === k && k != undefined){
                nums.splice(k, 1)
            }
        })
    })
};