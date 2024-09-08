const num1 = [4, 1 ,2];
const num2 = [1 ,3 ,4 ,2];

function nextGreaterElementh(num1, num2){
    num1.forEach((num)=>{
        const idx = num2.indexOf(num)
        console.log(idx)
    })
}

nextGreaterElementh(num1, num2)