/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];

    nums1.forEach((num)=>{
        let greaterElement;
        const subset = nums2.indexOf(num);
        for(let i = subset + 1; i <= nums2.length; i++){
            if(nums2[i] > num){
                greaterElement = nums2[i];
                break;
            }else{
                greaterElement = -1;
            }
        }
        ans.push(greaterElement)
    })
    return ans
};