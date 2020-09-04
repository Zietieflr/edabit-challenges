function secondLargest(arr) {
	return arr.sort((a, b) => a - b)[arr.length - 2]
}