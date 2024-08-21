/* Returns a new array iterator object that contains the key/value pairs for each index in the array.*/

let arr = ['a', 'b', 'c'];
let iterator = arr.entries();

for (let [index, element] of iterator) {
  console.log(index, element);
}
