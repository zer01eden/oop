const Counter = function (selector) {
	const container = document.querySelector(selector);

	if (!container) throw new Error('Container elemennt not found');

	(this.selector = selector), (this.container = container), (this.number = 0);
};
Counter.prototype.init = function () {
	this.render();
};

Counter.prototype.render = function () {
	this.container.innerText = '';

	const h1 = document.createElement('h1');
	const button = document.createElement('button');

	h1.innerText = this.number;
	button.innerText = '+';

// we pass 'this' to constant 'self'
	const self = this;

	button.addEventListener('click', function () {
		//in higher order function 'addEventListener' the value of "this" within the handler (here it points to 'button')
		console.log(this); 
		// by creating a 'self' variable we can pass 'this' from the 'Counter' function
		console.log(self); //
		// this.inc();
		self.inc();
	});
	this.container.appendChild(h1);
	this.container.appendChild(button);
};

Counter.prototype.inc = function () {
	++this.number;
	this.render();
};

Counter.prototype.stat = function () {
	console.log(`info from: ${this.name}. current number is: ${this.number}`);
	return this.number;
};

// const counter1 = new Counter('.counter-1');
