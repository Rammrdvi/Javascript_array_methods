/* Creates a new array with the results of calling a function on every element. */

let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2);
console.log(doubled); // output [2,4,6]

let squareArray = arr.map(function(num){
    return num * num;
});

console.log(squareArray); // output [1,4,9]

