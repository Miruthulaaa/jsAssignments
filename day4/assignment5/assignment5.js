let salesData = [
{'sales': 2000, 'totalCommision': ''},
{'sales': 6000, 'totalCommision': ''},
{'sales': 12000, 'totalCommision': ''},
{'sales': 20001, 'totalCommision': ''}
]
console.log(`salesData ${JSON.stringify(salesData)}`);

function sales() {
	let display = '';
	let percentage = [
	{'min':0,'max':5000,'p': 2},
	{'min':5001, 'max':10000,'p':5},
	{'min':10001,'max':20000,'p':7},
	{'min':20001,'p':10}
	];
	let p;
	salesData.forEach((element, i) => {
		percentage.find((e) => {
			if(element.sales >= e.min && e.max && element.sales <= e.max) {
				p = e.p;
				return;
			}
			if(!e.max && element.sales >= e.min) {
				p = e.p;
				return;
			}
		})
		display += `<div>person ${i+1} - sales done: ${element.sales}, percentage: ${p}, total commision: ${element.sales + (element.sales * (p / 100))}</div>`;

	});
	document.write(display);
}
