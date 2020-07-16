let number = prompt('Enter the number:');
let isEven = function(number) {
	return (number % 2 == 0) ? 'even' : 'odd';
};
let variable = isEven(number);
let output = `The number entered is ${number} and Number is ${variable}`;
document.getElementById('output').innerHTML = output;
console.log(output);
