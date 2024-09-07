const arr = [6,6,6,6]
let obj = {};
let limit = arr.length / 2;

const candyTypes = arr.filter((type)=>{
    if(obj[type] !== true){
        obj[type] = true;
        return true;
    }else{
        return false;
    }
})
console.log(Object.values(obj).length)
// if(limit < candyTypes.length){
//     console.log(limit);
// }else{
//     console.log(candyTypes.length);
// }

