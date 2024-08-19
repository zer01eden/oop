//factory function - produce new objects/functions

const makeCounter = function (name) {
	return {
		name: name,
		number: 0,
		inc: makeCounter.inc,
		stat: makeCounter.stat,
	};
};

//this is test fabric functions
//this is not the best solution
//constructor is better

makeCounter.inc = function () {
	++this.number;
};

makeCounter.stat = function () {
	console.log(`info from: ${this.name}. current number is: ${this.number}`);
	return this.number;
};

const counter1 = makeCounter('counter1');
const counter2 = makeCounter('counter2');
const counter3 = makeCounter('counter3');

counter1.inc();
counter1.inc();
counter1.inc();
counter2.inc();
counter2.inc();
counter3.inc();

if (counter1.stat() !== 3) throw new Error('counter 1 do not work');
if (counter2.stat() !== 2) throw new Error('counter 2 do not work');
if (counter3.stat() !== 1) throw new Error('counter 3 do not work');
