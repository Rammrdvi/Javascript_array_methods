/* shift() method is used to remove element from the begining of an array */

let arr=[0,1,2,3,4,5];

arr.shift();
console.log(arr);

/* is possible to remove multiple element by using shift ?
   No, it is possible multiple element in an array, But
   Yes, It is possible to multiple element in an array by using for loop
*/

let noOfElement =3;

for(let i=0; i< noOfElement; i++){
    arr.shift();
}

console.log(arr);