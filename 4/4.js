
let arr = [1,3,5,7];
console.log(arr);
let str = "hello world";


let arr2 = arr.map(ele => ele * 2) ;

console.log(arr2);

let arr3 = arr.filter(ele => ele > 2);

console.log(arr3);

let arr4 = Array.from(arr , ele => ele + 1);
console.log(arr4);


console.log(str.startsWith('h'));
console.log(str.endsWith('a'));