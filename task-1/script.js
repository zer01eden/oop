const inc = function () {
	++this.number;
};

const stat = function () {
	console.log(`info from: ${this.name}. current number is: ${this.number}`);
	return this.number;
};

// test constructor function 
const Counter = function (name) {
	this.name = name, 
	this.number = 0, 
	this.inc = inc,
	this.stat = stat 
}

// keyword *new* use function Counter created object 
const counter1 = new Counter('counter1');
const counter2 = new Counter('counter2');
const counter3 = new Counter('counter3');

counter1.inc();
counter1.inc();
counter1.inc();
counter2.inc();
counter2.inc();
counter3.inc();

if (counter1.stat() !== 3) throw new Error('counter 1 do not work');
if (counter2.stat() !== 2) throw new Error('counter 2 do not work');
if (counter3.stat() !== 1) throw new Error('counter 3 do not work');
