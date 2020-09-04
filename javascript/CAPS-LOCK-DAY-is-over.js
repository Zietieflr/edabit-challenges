function normalize(str) {
	return str.toUpperCase() != str
		? str
		: formatStr(str)
}

function formatStr(str) {
	const lowerStr = str.toLowerCase()
	return lowerStr.charAt(0).toUpperCase()
		+ lowerStr.slice(1)
		+ "!"
}