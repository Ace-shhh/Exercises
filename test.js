const binary = 1011001;

function convertToDecimal(binary){
    const arr = binary.toString().split("").reverse();
    let dec = 1;
    const decimals = []
    arr.forEach((num)=>{
        if(num == 1){
            decimals.push(dec);
        };
        dec = dec * 2;
    })
    let answer = 0;
    decimals.forEach((num)=>{
        answer = answer + num;
    })
    
    return answer;
}

convertToDecimal(binary)