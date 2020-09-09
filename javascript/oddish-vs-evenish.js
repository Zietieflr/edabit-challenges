function oddishOrEvenish(num) {
	const digits = num.toString().split("")
	const sum = digits.reduce((sum, digits) => {
		sum += +digits
		return sum
	}, 0)
	return sum % 2 == 0 ? "Evenish" : "Oddish"
}