function swap(inputArr, tuple) {
    const val1 = inputArr[tuple[0]]
    inputArr[tuple[0]] = inputArr[tuple[1]]
    inputArr[tuple[1]] = val1
    return inputArr
}