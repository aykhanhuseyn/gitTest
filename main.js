// let age = null;

// while (age === null || age === '') {
// 	age = prompt('what is tour age?');
// }

function getEven(number) {
	let i = 0;
	let array = [];

	while (i <= number) {
		if (i % 2 === 0) {
			array.push(i);
		}

		i = i + 1;
	}

	return array;
}

console.log(getEven(55));

function getFactorial(number) {
	if (number <= 1) return 1;

	let result = 1;
	let i = number;

	while (i > 1) {
		result *= i;

		i--;
	}

	return result;
}

console.log(getFactorial(5));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 24, 55, 98];
let findThis = 5;
