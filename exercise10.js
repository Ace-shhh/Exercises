const binary = 1011001;

function convertToDecimal(binary){
    const arr = binary.toString().split("").reverse();
    let dec = 1;
    let answer = 0;

    arr.forEach((num)=>{
        if(num == 1){
            answer = answer + dec
        };
        dec = dec * 2;
    })
    
    return answer
}

convertToDecimal(binary)