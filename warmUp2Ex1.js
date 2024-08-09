/**
* Given an array of integers, print out the values in
* ascending order.
* 
* Ex:
* Input: [5,4,3,2,1]
* Output: 1 2 3 4 5
*/

let numbers = [1, 1000, 5, 3, 4, 2, 1];

numbers.sort((a, b) => a - b);
 for (i = 0; i < numbers.length; i++){
    console.log(numbers[i])
 }
