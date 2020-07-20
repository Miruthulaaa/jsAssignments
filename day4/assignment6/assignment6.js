let value;
let i = 1;
check();
function check() {
	value = prompt('Enter number greater than 100');
	if(value && value <= 100)
		check();

}