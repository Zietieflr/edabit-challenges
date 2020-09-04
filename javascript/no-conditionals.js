function flip(y) {
	const flipLookUp = {
		0: 1,
		1: 0,
	}
	
	return flipLookUp[y]
}

// better solution: return 1 - y
// more succinct version: return [1, 0][y]