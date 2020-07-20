function added(num1, num2) {
	console.log(num1, num2)
	num1 = Number(num1);
	num2 = Number(num2);
	if(!num1)
		num1 = 0;
	if(!num2)
		num2 = 0;
	console.log(num1+num2);
	return num1+num2;
}
function add(){
	document.getElementById('add').innerHTML = '';
	document.getElementById('add').innerHTML = `  Result : ${added(document.getElementById('num1').value, document.getElementById('num2').value)}`;
}
function subtract() {
	document.getElementById('sub').innerHTML = '';
	let num_1 = Number(document.getElementById('num1s').value);
	let num_2 = Number(document.getElementById('num2s').value);
	if(!num_1) {
		num_1 = 0;
		num_1 = num_2;
		num_2 = '';
	}
	if(!num_2)
		num_2 = 0;
	
	document.getElementById('sub').innerHTML = ` Result : ${num_1 - num_2}`
}

function multiply() {
	document.getElementById('sqroot').innerHTML = '';
	let number1 = Number(document.getElementById('num1m').value);
	let number2 = Number(document.getElementById('num2m').value);
	if(!number1)
		number1 = 1;
	if(!number2)
		number2 = 1;
	document.getElementById('mul').innerHTML = ` Result : ${number1 * number2}`;
}

function squareRoot() {
	document.getElementById('sqroot').innerHTML = ''
	let number = Number(document.getElementById('num1sq').value);
	if(number){
		document.getElementById('sqroot').innerHTML = ` Result : ${Math.sqrt(number).toFixed(2)}`;
	}
}
function divide() {
	let first = Number(document.getElementById('num1d').value);
	let sec = Number(document.getElementById('num2d').value);
	document.getElementById('divide').innerHTML = '';
	if(!first){
		first = 0;
		document.getElementById('num1d').value = first;
	}
	if(!sec){
		sec = 0;
		document.getElementById('num2d').value = sec;
	}
	document.getElementById('divide').innerHTML = ` Result : ${first / sec}`
}