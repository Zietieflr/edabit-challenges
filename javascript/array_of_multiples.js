function arrayOfMultiples (num, length) {
	let sum = 0;
	let sums = [];
	for (let i = 0; i < length; i++) {
		sum += num;
		sums.push(sum);
	}
	return sums
}

// with i+1 you can multiply, so you don't have to declare sum