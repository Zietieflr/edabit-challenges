function bomb(str) {
	return str.toLowerCase().includes("bomb")
		? "Duck!!!"
		: "There is no bomb, relax."
}