/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let push = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        count = 0;
        for (let j = 0; j < nums.length; j++){
            if(nums[i] != nums[j] && nums[i] > nums[j]){
                    count++;
            }else{
                continue;
            }
        }
        push.push(count)
    }
    return push;
};