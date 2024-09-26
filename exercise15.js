const arr = [1,2,3,4,5]
function createLinkedList(arr){
    let next = null;
    for(let i = arr.length - 1; i >= 0; i--){
        const obj = {
            value: arr[i],
            next : next
        }
        next = obj;
    }
    return next;
};

createLinkedList(arr);