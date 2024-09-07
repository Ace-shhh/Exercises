/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let obj= {};
    let limit = candyType.length / 2;
    let numOfTypes = 0;
    candyType.forEach((type)=>{
        if(obj[type] !== true){
            obj[type] = true;
            numOfTypes = numOfTypes + 1;
        };
    })

    if(limit < numOfTypes){
        return limit;
    }else{
        return numOfTypes;
    }
};