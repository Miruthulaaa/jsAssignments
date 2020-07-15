
let arr = ['1', '2', '3', '4', '5'];
arr.push('6'); // array = ['1','2','3','4','5','6'];
console.log(arr)
console.log('poped:' + arr.pop(), arr); // array= ['1','2','3','4','5'] 
arr.shift();
console.log(arr); //'2','3','4','5'
arr.unshift('0'); //'0','2','3','4','5'
console.log(arr);

//delete
arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log('deleted index:'+arr[1]); // undefined

// now arr = ["I",  , "home"];
console.log('length of arr:'+arr.length); // 3

//splice
arr = ["I", "study", "JavaScript", 'Essentials'];

arr.splice(1, 2); // from index 1 remove 2 element

console.log( arr ); // ["I", "Essentials"]

arr.splice(1); //remove index 1

console.log(arr) // ["I"]

arr = ["I", "study", "JavaScript", 'Essentials'];

arr.splice(0, 3, 'replaced1', 'replaced2') // removed 3 from 0th index and replace

console.log(arr);

//slice
arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

//String 
console.log(String.fromCharCode(97,98,99,120,121,122));
//output: abcxyz
console.log(String.fromCharCode(72,69,76,76,79));
//output: HELLO
//replace(substr, replacetext)
var myString = '999 JavaScript Rowdy';
console.log(myString.replace("JavaScript", "JS"));
//output: 999 JS Rowdy

//replace(regexp, replacetext)
var myString = '990 JavaScript Rowdy';
console.log(myString.replace("990", "The"));
//output: The JavaScript Rowdy
console.log(myString.search('Rowdy')) //15
console.log(myString.slice(0,3), myString)//990 copy
console.log(myString.substring(0,6)) //990 Ja
console.log(myString.substring(9)) //cript Rowdy
