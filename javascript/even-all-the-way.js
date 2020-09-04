function getOnlyEvens(nums) {
	return nums.filter( (num, index) => {
		return num % 2 == 0 && index % 2 == 0
	})
}