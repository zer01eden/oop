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

//
	const self = this;

	button.addEventListener('click', function () {
		console.log(this);
		console.log(self);
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
