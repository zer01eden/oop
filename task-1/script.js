const makeCounter = function () {
	let number = 0;

	function inc() {
		++number;
	}

	function status() {
		console.log(`'current number is: ${number}`);
	}

	return {
		inc: inc,
		status: status,
	};
};

const counter1 = makeCounter();
const counter2 = makeCounter();

