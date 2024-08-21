/* Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value. */

let arr = [1, 2, 3, 4];
let result = arr.reduceRight((acc, val) => acc + val, 0);
console.log(result); //output : 10
