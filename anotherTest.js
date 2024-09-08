const nums1 = [4,1,2]
const nums2 = [1,3,4,2]

function nextGreaterElement(){
    let ans = []
    nums1.forEach((num)=>{
        let greaterElement = -1;
        const subset = nums2.indexOf(num);
        for(i = subset + 1; i < nums2.length; i++){
            if(nums2[i] > num){
                greaterElement = nums2[i];
                break;
            }else{
                greaterElement = -1
            }
        }
        ans.push(greaterElement);
    })
    return ans
}

nextGreaterElement(nums1, nums2)