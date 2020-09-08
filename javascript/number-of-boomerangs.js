function countBoomerangs(numbers) {
	return numbers.reduce((boomerangs, number, index, sourceArr) => {
		if (number == sourceArr[index+2] && number != sourceArr[index+1]) {
			boomerangs++
		}
		return boomerangs
	}, 0)
}