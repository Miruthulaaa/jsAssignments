let mark = prompt('Enter you marks below:');
// using if else
let grade = function() {
	if(mark < 35) return 'F';
	else if(mark < 50) return 'C';
	else if(mark < 80) return 'B';
	else return 'A';
}
let output = `using_if_else:  Marks are ${mark} and grade is ${grade()}`;
document.getElementById('usingifelse').innerHTML = output;
console.log(output, ' : using if else');
// using switch
let grades;
function switchCase() {
	switch(true) {
		case (mark <= 34): grades = 'F';
		break;
		case (mark <= 49): grades = 'C';
		break;
		case (mark <= 79): grades = 'B';
		break;
		default: grades = 'A';
	}
}
switchCase();
output = `using_switch:  Marks are ${mark} and grade is ${grades}`;
document.getElementById('usingswitch').innerHTML = output;
console.log(output, ' : using switch');
// ternaru operator
grades = (mark < 35) ? 'F' : (mark < 50) ? 'C' : (mark < 80) ? 'B' : 'A';
output = `using_ternary:  Marks are ${mark} and grade is ${grades}`;
document.getElementById('usingternary').innerHTML = output;
console.log(output, ' : using ternary');

