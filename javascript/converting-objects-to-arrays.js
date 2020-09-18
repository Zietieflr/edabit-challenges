function toArray(object) {
	let convertedArray = []
	for (let [key, value] of Object.entries(object)) {
		convertedArray.push([key, value])
	}
	return convertedArray
}

// In this instance, Object.entries(object) returns the correct format.
// const toArray = object => Object.entries(object) // is equivalent. 