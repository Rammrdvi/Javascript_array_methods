/* Applies a function to reduce the array to a single value. */

let arr =[1,2,3,4];

let sum = arr.reduce((acc,val)=> acc+val,0)

console.log(sum);

let val = 9;
let sum2 = arr.reduce(function(acc,num){

    return acc+num;
},val);

console.log(sum2);