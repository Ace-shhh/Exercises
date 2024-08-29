function swap(inputArr, tuple) {
    const val1 = inputArr.indexOf(tuple[0]);
    inputArr[val1] = tuple[1]
    const val2 = inputArr.indexOf(tuple[1], 2);
    if(val2 !== -1){
        inputArr[val2] = tuple[0]
    }

    return inputArr
}