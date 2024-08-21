/* Returns the index of the first element that satisfies the provided testing function. */

let arr = [1,2,3,4,5];

let index = arr.findIndex(x => x>2);

console.log(index);

let index2 = arr.findIndex (function(x){
    return x>4;
});

console.log(index2);


