/* Returns the first element that satisfies the provided testing function. */

let arr = [1,2,3,4,5];

let find = arr.find(x=> x>2);

console.log(find); //output 3

let find2 = arr.find(function(x){
    return x >=4;
});

console.log(find2);