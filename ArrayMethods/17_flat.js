/* Flattens nested arrays into a single array. */

let arr = ["ramji",["muthu selvi",["maahiraah"]]];

let result = arr.flat(2);

console.log(result); // output: [ 'ramji', 'muthu selvi', 'maahiraah' ]