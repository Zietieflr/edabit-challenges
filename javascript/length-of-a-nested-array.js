function getLength(array) {
	return array.reduce((count, element) => {
		count += (Array.isArray(element) ? getLength(element) : 1);
		return count;
	}, 0)
}
