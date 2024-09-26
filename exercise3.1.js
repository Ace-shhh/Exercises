const nums = [1,1,2,3,4,4,4,5,5,6];

function removeDuplicates(){
    let previousNumber;
    let rotate = nums;
    let filtered = [];
    nums.forEach((i)=>{
        if (i != previousNumber){
            const filter = rotate.filter((x)=> x != i)
            rotate = filter;
            previousNumber = i;
            filtered.push(i)
        }
    })
    console.log(filtered);
};

removeDuplicates(nums);