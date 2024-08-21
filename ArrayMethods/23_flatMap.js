/* First maps each element using a mapping function, then flattens the result into a new array. */

let arr= [1,2,3,4];

let flatMapped = arr.flatMap(x=>[x,x*3]);

console.log(flatMapped);