loop();
function loop() {
	let textNode = '';
	let dividend ;
	let d1 = document.getElementById('mylist');
	for(let item = 1; item <= 100; item++) {
		if(item % 3 == 0 && item % 5 != 0) {
			textNode = 'fizz'
			dividend = '3';
		}
		else if(item % 5 == 0 && item % 3 != 0) {
			textNode = 'buzz'
			dividend = 5
		}
		else if(item % 3 == 0 && item % 5 == 0) {
			textNode = 'fizzbuzz'
			dividend = '3&5'
		}
		else textNode = '';
		if(textNode != '')
			d1.insertAdjacentHTML('beforeend', `<div id="two">${textNode} - ${item} divided by ${dividend}</div>`);
	}
}