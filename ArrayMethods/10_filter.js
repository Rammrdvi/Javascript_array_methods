/* Creates a new array with elements that pass a test.  */

let arr = [1,2,3,4,5,6];

let filter = arr.filter (x => x>2);

console.log(filter);

let filter2 = arr.filter(function(x){
    return x%2==0;
});

console.log(filter2);