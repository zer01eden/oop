const inc = function () {
	++this.number;
};

const stat = function () {
	console.log(`info from: ${this.name}. current number is: ${this.number}`);
};
const counter1 = {
	name: 'counter1',
	number: 0,
	inc: inc,
	stat: stat,
};

const counter2 = {
	name: 'counter2',
	number: 0,
	inc: inc,
	stat: stat,
};
