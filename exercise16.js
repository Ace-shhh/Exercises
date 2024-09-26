const numRows = 1;

function pascal(numRows) {
    let arr = [[1]];
    let previousRow = 0;
    for(let i = 0; i < numRows - 1; i++){
        let row = [1];
        let j = 0;
        while(arr[previousRow][j +1]){
            row.push(arr[previousRow][j] + arr[previousRow][j +1])
            j++;
        }
        row.push(1)
        arr.push(row)
        previousRow++
    }
    console.log(arr);
    
};
pascal(numRows)