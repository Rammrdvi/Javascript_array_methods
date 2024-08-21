/* Adds, removes, or replaces elements in an array. */

let arr = [1,2,3,4];

arr.splice(1,2,'a','b');

console.log(arr);


/*You can also use negative indices to start from the end of the array: */

arr.splice(-3,2);
console.log(arr);