function changeEnough(change, amountDue) {
	const totalChange = change[0]*25
		+ change[1]*10
		+ change[2]*5
		+ change[3]
	return totalChange >= amountDue * 100
}

// from a math perspective, it's better to keep change
// in the appropriate units, rather then a factor of 100