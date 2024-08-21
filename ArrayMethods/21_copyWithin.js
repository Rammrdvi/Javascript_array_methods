/* Copies part of an array to another location within the same array.*/

let arr = [1,2,3,4,5];

arr.copyWithin(0,3,4);

console.log(arr); // output: [ 4, 2, 3, 4, 5 ]